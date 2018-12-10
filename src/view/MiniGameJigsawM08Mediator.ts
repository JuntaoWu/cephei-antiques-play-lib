
module childGame {

    export class MiniGameJigsawM08Mediator extends puremvc.Mediator implements puremvc.IMediator {
        public static NAME: string = "MiniGameJigsawM08Mediator";

        public constructor(viewComponent: any) {
            super(MiniGameJigsawM08Mediator.NAME, viewComponent);
            super.initializeNotifier("ChildApplicationFacade");
            
            this.jigsawImgGroupList = [
                this.gameJigsaw.jigsawImgGroup1, this.gameJigsaw.jigsawImgGroup2, this.gameJigsaw.jigsawImgGroup3
                , this.gameJigsaw.jigsawImgGroup4, this.gameJigsaw.jigsawImgGroup5, this.gameJigsaw.jigsawImgGroup6
                , this.gameJigsaw.jigsawImgGroup7, this.gameJigsaw.jigsawImgGroup8, this.gameJigsaw.jigsawImgGroup9
            ]
            this.jigsawImgGroupList.forEach((i, index) => {
                i.addEventListener(egret.TouchEvent.TOUCH_TAP, (e: egret.TouchEvent) => {
                    e.stopImmediatePropagation();
                    this.jigsawImgclick(index);
                }, this);
            })
            this.gameJigsaw.addEventListener(egret.Event.ADDED_TO_STAGE, this.initData, this);
        }

        public async initData() {
            let imgList = ["m08_2", "m08_5", "m08_8", "m08_4", "", "m08_7", "m08_1", "m08_3", "m08_6"];
            // let changeNum = 1;
            // while (changeNum % 2 != 0) {
            //     for (let i = 0; i < 9; i++) {
            //         let index1 = Math.floor(Math.random() * 9);
            //         let index2 = Math.floor(Math.random() * 9);
            //         if (index1 != index2) {
            //             let temp = imgList[index1];
            //             imgList[index1] = imgList[index2];
            //             imgList[index2] = temp;
            //         }
            //     }
            //     //计算交换后不含空元素逆序数
            //     changeNum = 0;
            //     for (let i = 0; i < imgList.length; i++) {
            //         if (imgList[i]) {
            //             for (let j = imgList.length - 1; j > i; j--) {
            //                 if (imgList[j] && imgList[i] > imgList[j]) {
            //                     changeNum++
            //                 }
            //             }
            //         }
            //     }
            // } 
            // console.log("changeNum", changeNum, imgList);

            this.jigsawImgGroupList.forEach((i, index) => {
                let jigsawImg = i.getChildByName("jigsawImg") as eui.Image;
                jigsawImg.source = imgList[index];
                if (!imgList[index]) {
                    this.emptyIndex = index;
                }
            })
        }

        public jigsawImgGroupList: Array<eui.Group>;
        public emptyIndex: number; //拼图空的那项index

        public jigsawImgclick(index: number) {
            if (this.emptyIndex == index + 1 || this.emptyIndex == index - 1
                || this.emptyIndex == index + 3 || this.emptyIndex == index - 3) {
                
                let clickImg = this.jigsawImgGroupList[index].getChildByName("jigsawImg");
                let emptyImg = this.jigsawImgGroupList[this.emptyIndex].getChildByName("jigsawImg");
                this.jigsawImgGroupList[index].addChild(emptyImg);
                this.jigsawImgGroupList[this.emptyIndex].addChild(clickImg);
                this.emptyIndex = index;
                this.setResult();
            }
        }

        public setResult() {
            let isSuccess = true;
            let imgList = ["m08_1", "", "m08_2", "m08_3", "m08_4", "m08_5", "m08_6", "m08_7", "m08_8"];
            this.jigsawImgGroupList.forEach((i, index) => {
                let jigsawImg = i.getChildByName("jigsawImg") as eui.Image;
                if (jigsawImg.source != imgList[index]) {
                    isSuccess = false;
                }
            })
            if (isSuccess) {
                this.sendNotification(GameProxy.PASS_MINIGAME);
            }
        }

        public get gameJigsaw(): MiniGameJigsawM08 {
            return <MiniGameJigsawM08><any>(this.viewComponent);
        }
    }
}