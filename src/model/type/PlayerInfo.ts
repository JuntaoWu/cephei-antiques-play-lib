
module childGame {

    export class PlayerInfo {
        plotId: number; //当前剧情id
        collectedScenes?: Array<string>; //收集场景
        fatigueValue?: number; //体力值
    }
}