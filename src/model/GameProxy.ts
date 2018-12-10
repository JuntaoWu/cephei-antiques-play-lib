module childGame {

    export class GameProxy extends puremvc.Proxy implements puremvc.IProxy {
        public static NAME: string = "GameProxy";

        //小游戏
        public static SHOW_MINIGAME: string = "show_minigame";
        //通过小游戏
        public static PASS_MINIGAME: string = "pass_minigame";

        public playerInfo: PlayerInfo = {
            plotId: 1,
            collectedScenes: [],
            fatigueValue: 1000,
        };
        public pointHunag: number = 43;
        public pointMu: number = 43;

        public constructor() {
            super(GameProxy.NAME);
        }

        private _questions: Map<string, any>;
        public get questions(): Map<string, any> {
            if (!this._questions) {
                this._questions = new Map(Object.entries(RES.getRes("question_json")));
            }
            return this._questions;
        }

        private _chapterPlot: Map<string, any>;
		public get chapterPlot(): Map<string, any> {
			if (!this._chapterPlot) {
				this._chapterPlot = new Map(Object.entries(RES.getRes("chapter-plot_json")));
			}
			return this._chapterPlot;
		}

        public getCurrentPlot(): Plot {
            return this.chapterPlot.get(this.playerInfo.plotId.toString());
        }
        
		private _sceneRes: Map<string, any>;
		public get sceneRes(): Map<string, any> {
			if (!this._sceneRes) {
				let config = RES.getRes("scene_json") as Array<any>;
				let dictionary = _(config).groupBy((a: any) => a.type).value();
				this._sceneRes = new Map(Object.entries(dictionary));
			}
			return this._sceneRes;
		}
    }
}