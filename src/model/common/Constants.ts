
module childGame {

    export class Constants {

        public static get ResourceEndpoint(): string {
            return platform.name == "DebugPlatform" ? Constants.Endpoints.localResource : Constants.Endpoints.remoteResource;
        };

        public static get Endpoints() {
            if (platform.env == "dev") {
                return {
                    service: "http://gdjzj.hzsdgames.com:8091/",
                    localResource: "",
                    remoteResource: "http://gdjzj.hzsdgames.com:8091/miniGame/"
                };
            }
            if (platform.env == "prod") {
                return {
                    service: "http://gdjzj.hzsdgames.com:8091/",
                    localResource: "",
                    remoteResource: "http://gdjzj.hzsdgames.com:8091/miniGame/"
                };
            }
            if(platform.env == "test") {
                return {
                    service: "http://gdjzj.hzsdgames.com:8091/",
                    localResource: "",
                    remoteResource: "http://gdjzj.hzsdgames.com:8091/miniGame/"
                };
            }
        }
    }

    export enum Scene {
        Start = 1,
        Game = 2,
    }

    export const gameKey = {
        FloorSwitch: "地板开关",
        CubeStop: "魔方停止",
    }

    export const gameType = {
        Input: "填空",
        Select: "选择",
        MiniGame: "小游戏",
    }

    export const SceneType = {
        SceneBg: "场景CG",
        ScenePerson: "人物CG",
        SceneProps: "道具CG",
    }

    export const plotType = {
        PlotChange: "切换",
        PlotAdded: "追加",
        PlotQuestion: "谜题",
        Transition: "转场特效",
        PageChange: "界面切换经营",
    }
}