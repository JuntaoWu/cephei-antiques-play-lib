
module childGame {

    export class StoreWindowMediator extends puremvc.Mediator implements puremvc.IMediator {
        public static NAME: string = "StoreWindowMediator";

        private proxy: GameProxy;

        public constructor(viewComponent: any) {
            super(StoreWindowMediator.NAME, viewComponent);
            super.initializeNotifier("ChildApplicationFacade");
            this.proxy = <GameProxy><any>this.facade().retrieveProxy(GameProxy.NAME);

            this.storeWindow.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backClick, this);
            this.storeWindow.addEventListener(egret.Event.ADDED_TO_STAGE, this.initData, this);
            this.initData();
        }

        public initData() {
            let dataArr: any[] = RES.getRes("shop_json");
            let euiArr: eui.ArrayCollection = new eui.ArrayCollection(dataArr);
            this.storeWindow.shoplist.dataProvider = euiArr;
            this.storeWindow.shoplist.itemRenderer = shop_list;
        }       

        public backClick() {
            this.storeWindow.close();
        }

        public listNotificationInterests(): Array<any> {
            return [];
        }

        public handleNotification(notification: puremvc.INotification): void {
            var data: any = notification.getBody();
            switch (notification.getName()) {
            }
        }

        public get storeWindow(): StoreWindow {
            return <StoreWindow><any>(this.viewComponent);
        }
    }
}