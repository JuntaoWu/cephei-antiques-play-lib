declare module childGame {
    class MiniGameFloorSwitchMediator extends puremvc.Mediator implements puremvc.IMediator {
        static NAME: string;
        constructor(viewComponent: any);
        initData(): Promise<void>;
        private dataList;
        private selectedList;
        selectItem(): void;
        readonly floorSwitch: MiniGameFloorSwitch;
    }
}
declare module childGame {
    class AccountAdapter {
        static checkForUpdate(): Promise<{}>;
    }
}
declare module childGame {
    class AssetAdapter implements eui.IAssetAdapter {
        /**
         * @language zh_CN
         * 解析素材
         * @param source 待解析的新素材标识符
         * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
         * @param thisObject callBack的 this 引用
         */
        getAsset(source: string, compFunc: Function, thisObject: any): void;
    }
}
declare module childGame {
    class LoadingUI extends eui.Component implements RES.PromiseTaskReporter {
        private loadingText;
        private labelText;
        private progressBg;
        private progressBar;
        private loadingLabel;
        constructor();
        createCompleteEvent(event: eui.UIEvent): void;
        onProgress(current: number, total: number): void;
        showInformation(message: any): void;
    }
}
declare module childGame {
    class Main extends eui.UILayer {
        protected createChildren(): void;
        private runGame();
        private loadResource();
        private loadTheme();
        private textfield;
        /**
         * 创建场景界面
         * Create scene interface
         */
        protected createGameScene(): void;
        /**
         * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
         * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
         */
        private createBitmapByName(name);
        /**
         * 点击按钮
         * Click the button
         */
        private onButtonClick(e);
    }
}
/**
 * 平台数据接口。
 * 由于每款游戏通常需要发布到多个平台上，所以提取出一个统一的接口用于开发者获取平台数据信息
 * 推荐开发者通过这种方式封装平台逻辑，以保证整体结构的稳定
 * 由于不同平台的接口形式各有不同，白鹭推荐开发者将所有接口封装为基于 Promise 的异步形式
 */
interface Platform {
    env: string;
    name: string;
    appVersion: string;
    getUserInfo(): Promise<any>;
    login(): Promise<any>;
    checkForUpdate(): Promise<any>;
    getVersion(): Promise<any>;
    applyUpdate(version: string): any;
    getOpenDataContext(): any;
    shareAppMessage(message?: string, query?: string, callback?: Function): any;
    showShareMenu(): any;
    setStorage(key: any, value: any): any;
    getStorage(key: any): any;
    setStorageAsync(key: any, value: any): any;
    getStorageAsync(key: any): Promise<any>;
    getLaunchInfo(): any;
    showPreImage(data: any, index?: any): any;
    authorizeUserInfo(callback: any): any;
    createBannerAd(name: string, adUnitId: string, style: any): any;
    showBannerAd(name: string): any;
    hideAllBannerAds(): any;
    createRewardedVideoAd(name: string, adUnitId: string, callback: Function, onError: Function): any;
    showVideoAd(name: string): any;
    isVideoAdDisabled(name: string): any;
    disableVideoAd(name: string): any;
}
declare let platform: Platform;
interface Window {
    platform: Platform;
}
declare module childGame {
    class ThemeAdapter implements eui.IThemeAdapter {
        /**
         * 解析主题
         * @param url 待解析的主题url
         * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
         * @param onError 解析失败回调函数，示例：errorFunc():void;
         * @param thisObject 回调的this引用
         */
        getTheme(url: string, onSuccess: Function, onError: Function, thisObject: any): void;
    }
}
declare module childGame {
    class AppContainer extends eui.UILayer {
        startScreen: StartScreen;
        gameScreen: GameScreen;
        constructor();
        /**
         * 进入开始页面
         */
        enterStartScreen(): void;
        enterGameScreen(): void;
        storeWindow: StoreWindow;
        showStoreWindow(): void;
        sceneWindow: SceneSummaryWindow;
        showSceneSummaryWindow(): void;
        sceneDetailsWindow: SceneDetailsWindow;
        showSceneDetailsWindow(type: string): void;
        developerWindow: DeveloperWindow;
        showDeveloperWindow(): void;
        manageWindow: ManageWindow;
        showManageWindow(): void;
        settingWindow: SettingWindow;
        showSettingWindow(): void;
    }
}
declare module childGame {
    class ControllerPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
        constructor();
        execute(notification: puremvc.INotification): void;
    }
}
declare module childGame {
    class ModelPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
        constructor();
        execute(notification: puremvc.INotification): void;
    }
}
declare module childGame {
    class StartupCommand extends puremvc.MacroCommand {
        constructor();
        initializeMacroCommand(): void;
    }
}
declare module childGame {
    class ViewPrepCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
        constructor();
        execute(notification: puremvc.INotification): void;
    }
}
declare module childGame {
    class GameCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
        constructor();
        static NAME: string;
        /**
         * 开始游戏
         */
        static START_GAME: string;
        /**
         * 注册消息
         */
        register(): void;
        execute(notification: puremvc.INotification): Promise<any>;
    }
}
/**
 * Created by xzper on 2014/11/15.
 */
declare module childGame {
    class SceneCommand extends puremvc.SimpleCommand implements puremvc.ICommand {
        constructor();
        static NAME: string;
        /**
         * 切换场景
         */
        static CHANGE: string;
        static SHOW_MANAGE: string;
        static SHOW_DEVE: string;
        static SHOW_STORE: string;
        static SHOW_SCENE: string;
        static SHOW_SCENE_DETAILS: string;
        static SHOW_SETTING: string;
        register(): void;
        initializeNotifier(key: string): void;
        execute(notification: puremvc.INotification): Promise<any>;
    }
}
declare module childGame {
    class EffectManager {
        static playEffect(effect: string): void;
        static beBig(target: egret.DisplayObject): void;
        static disappear(target: egret.DisplayObject): void;
        static gradualClear(target: egret.DisplayObject): void;
        static beBigAndDisappear(target: egret.DisplayObject): void;
        static disappear2(target: egret.DisplayObject): void;
        static gradualShow(target: egret.DisplayObject): void;
        static shakeTargetSevere(target: egret.DisplayObject): void;
        static shakeTarget(target: egret.DisplayObject): void;
        static gradualShow2(target: egret.DisplayObject): void;
        static vagueImage(obj: any): void;
        static vagueToClear(obj: any): void;
        static gradualVague(obj: any): void;
    }
}
declare module childGame {
    class GameProxy extends puremvc.Proxy implements puremvc.IProxy {
        static NAME: string;
        static SHOW_MINIGAME: string;
        static PASS_MINIGAME: string;
        playerInfo: PlayerInfo;
        pointHunag: number;
        pointMu: number;
        constructor();
        private _questions;
        readonly questions: Map<string, any>;
        private _chapterPlot;
        readonly chapterPlot: Map<string, any>;
        getCurrentPlot(): Plot;
        private _sceneRes;
        readonly sceneRes: Map<string, any>;
    }
}
declare module childGame {
    class CommonData {
    }
}
declare module childGame {
    class Constants {
        static readonly ResourceEndpoint: string;
        static readonly Endpoints: {
            service: string;
            localResource: string;
            remoteResource: string;
        };
    }
    enum Scene {
        Start = 1,
        Game = 2,
    }
    const gameKey: {
        FloorSwitch: string;
        CubeStop: string;
    };
    const gameType: {
        Input: string;
        Select: string;
        MiniGame: string;
    };
    const SceneType: {
        SceneBg: string;
        ScenePerson: string;
        SceneProps: string;
    };
    const plotType: {
        PlotChange: string;
        PlotAdded: string;
        PlotQuestion: string;
        Transition: string;
        PageChange: string;
    };
}
declare module childGame {
    class PlayerInfo {
        plotId: number;
        collectedScenes?: Array<string>;
        fatigueValue?: number;
    }
}
declare module childGame {
    class Plot {
        id: number;
        res: string;
        type: string;
        description: string;
        questionId?: number;
        effect?: string;
        effectTrigger?: string;
        sound?: string;
        playTime?: number;
        talkId?: number;
        autoNextTime?: number;
        portrait?: string;
        next?: any;
    }
}
declare module childGame {
    class QuestionGame {
        id: number;
        keyword: string;
        type: string;
        img: string;
        description: string;
        right: string;
        points1: string;
        points2: string;
        question?: string;
        answer?: string;
        optionsId?: number;
    }
}
declare module childGame {
    class DragonBones {
        static createDragonBone(dragonBoneName: string, armatureName: string): dragonBones.EgretArmatureDisplay;
    }
}
declare module childGame {
    class SoundPool {
        static musicClips: {};
        static playSoundEffect(soundName: string): egret.SoundChannel;
        static stopBGM(): void;
        static playBGM(soundName: string): egret.SoundChannel;
    }
}
declare module childGame {
    class ApplicationMediator extends puremvc.Mediator implements puremvc.IMediator {
        static NAME: string;
        constructor(viewComponent: any);
        listNotificationInterests(): Array<any>;
        handleNotification(notification: puremvc.INotification): void;
        readonly main: AppContainer;
    }
}
declare module childGame {
    class GameScreenMediator extends puremvc.Mediator implements puremvc.IMediator {
        static NAME: string;
        private proxy;
        constructor(viewComponent: any);
        private loadResGroup();
        private _plotOptions;
        readonly plotOptions: Map<string, any>;
        showResult: boolean;
        isQuestion: boolean;
        questionPoints: Array<string>;
        rightText: string;
        showPointsNum: number;
        addScene: eui.Image;
        textIsOver: boolean;
        wordList: Array<string>;
        next: number | string;
        initData(): void;
        settingScene(res: string, addType?: string, effect?: string, effectTigger?: string): void;
        addWordToDescription(): void;
        showPlotOption(talkId: any): void;
        selectItem(): void;
        showRightResult(): void;
        showNext(): void;
        btnTipsClick(): void;
        btnBackClick(): void;
        pictClick(): void;
        private beforeX;
        private beforeY;
        private touchBeginTime;
        private touchBegin(e);
        private touchEnd(e);
        private touchReleaseOutside(e);
        listNotificationInterests(): Array<any>;
        handleNotification(notification: puremvc.INotification): void;
        readonly gameScreen: GameScreen;
    }
}
declare module childGame {
    class M14 extends eui.Component implements eui.UIComponent {
        no1: eui.Image;
        no2: eui.Image;
        no3: eui.Image;
        no4: eui.Image;
        no5: eui.Image;
        no6: eui.Image;
        no7: eui.Image;
        no8: eui.Image;
        win: eui.Label;
        paperList: Array<eui.Image>;
        recordList: Array<any>;
        answerList: Array<any>;
        constructor();
        protected partAdded(partName: string, instance: any): void;
        protected childrenCreated(): void;
        private first_img_x;
        private first_img_y;
        private first_img;
        private is_touch_begin;
        private record(img);
        private is_touch_move;
        private move(s);
        private second_img_x;
        private second_img_y;
        private ischang;
        private transposition(s);
        private is_move_end;
        private move_end();
        private ww;
        private iswin();
    }
}
declare module childGame {
    class M2 extends eui.Component implements eui.UIComponent {
        red1: eui.Image;
        red2: eui.Image;
        red3: eui.Image;
        red4: eui.Image;
        red5: eui.Image;
        red6: eui.Image;
        red7: eui.Image;
        red8: eui.Image;
        red9: eui.Image;
        blue1: eui.Image;
        blue2: eui.Image;
        blue3: eui.Image;
        blue4: eui.Image;
        blue5: eui.Image;
        blue6: eui.Image;
        blue7: eui.Image;
        blue8: eui.Image;
        blue9: eui.Image;
        black1: eui.Image;
        black2: eui.Image;
        black3: eui.Image;
        black4: eui.Image;
        black5: eui.Image;
        black6: eui.Image;
        black7: eui.Image;
        black8: eui.Image;
        black9: eui.Image;
        white1: eui.Image;
        white2: eui.Image;
        white3: eui.Image;
        white4: eui.Image;
        white5: eui.Image;
        white6: eui.Image;
        white7: eui.Image;
        white8: eui.Image;
        white9: eui.Image;
        yellow1: eui.Image;
        yellow2: eui.Image;
        yellow3: eui.Image;
        yellow4: eui.Image;
        yellow5: eui.Image;
        yellow6: eui.Image;
        yellow7: eui.Image;
        yellow8: eui.Image;
        yellow9: eui.Image;
        row1_1: eui.Image;
        row1_2: eui.Image;
        row2_1: eui.Image;
        row2_2: eui.Image;
        row3_1: eui.Image;
        row3_2: eui.Image;
        column1_1: eui.Image;
        column1_2: eui.Image;
        column2_1: eui.Image;
        column2_2: eui.Image;
        column3_1: eui.Image;
        column3_2: eui.Image;
        win: eui.Label;
        allCube: Array<any>;
        whiteCube: Array<any>;
        rowList: Array<any>;
        columnList: Array<any>;
        constructor();
        protected partAdded(partName: string, instance: any): void;
        protected childrenCreated(): void;
        private moveCube(i, n, direction);
        private isWin();
    }
}
declare module childGame {
    class M24 extends eui.Component implements eui.UIComponent {
        hei: eui.Image;
        bai: eui.Image;
        zhu: eui.Image;
        he: eui.Image;
        jiao: eui.Image;
        yi: eui.Image;
        ti: eui.Image;
        jia: eui.Image;
        arr1: Array<eui.Image>;
        arr2: Array<eui.Image>;
        win: eui.Label;
        constructor();
        protected partAdded(partName: string, instance: any): void;
        protected childrenCreated(): void;
        haha(ele: eui.Image, arr: Array<eui.Image>): void;
        iswin(): void;
    }
}
declare module childGame {
    class M3_2 extends eui.Component implements eui.UIComponent {
        bright: eui.Group;
        turnOffLight: eui.Button;
        turnOnLight: eui.Button;
        win: eui.Label;
        word1: eui.Scroller;
        word2: eui.Scroller;
        word3: eui.Scroller;
        word4: eui.Scroller;
        wordList1: eui.List;
        wordList2: eui.List;
        wordList3: eui.List;
        wordList4: eui.List;
        constructor();
        protected partAdded(partName: string, instance: any): void;
        protected childrenCreated(): void;
        private stoptouch(word);
        private isWin();
        private turn();
        private timeOnEnterFrame;
        private onLoad(event);
        private onEnterFrame(e);
        private wordLoop(word);
    }
}
declare module childGame {
    class M5 extends eui.Component implements eui.UIComponent {
        Start: eui.Image;
        End: eui.Image;
        cube1: eui.Image;
        cube2: eui.Image;
        cube3: eui.Image;
        cube4: eui.Image;
        cube5: eui.Image;
        cube6: eui.Image;
        cube7: eui.Image;
        cube8: eui.Image;
        cube9: eui.Image;
        cube10: eui.Image;
        cube11: eui.Image;
        win: eui.Label;
        Group: eui.Group;
        moveCube: Array<eui.Image>;
        allCube: Array<eui.Image>;
        constructor();
        protected partAdded(partName: string, instance: any): void;
        protected childrenCreated(): void;
        private touchPointBegin_x;
        private touchPointBegin_y;
        private nowCube;
        private touchBegin(cube, e);
        private touchPointEnd_x;
        private touchPointEnd_y;
        private X;
        private Y;
        private touchEnd(e);
        private isWin();
    }
}
declare module childGame {
    class M6 extends eui.Component implements eui.UIComponent {
        button1: eui.Button;
        button2: eui.Button;
        button3: eui.Button;
        button4: eui.Button;
        button5: eui.Button;
        win: eui.Label;
        lose: eui.Group;
        again: eui.Button;
        allButton: Array<eui.Button>;
        constructor();
        protected partAdded(partName: string, instance: any): void;
        protected childrenCreated(): void;
        private password;
        private key(but, i);
        private tryAgain();
    }
}
declare module childGame {
    class M9 extends eui.Component implements eui.UIComponent {
        bg: eui.Image;
        ren: eui.Image;
        heng: Array<any>;
        shu: Array<any>;
        zhangai: Array<any>;
        constructor();
        protected partAdded(partName: string, instance: any): void;
        protected childrenCreated(): void;
        start_x: number;
        start_y: number;
        start(e: egret.TouchEvent): void;
        end(e: egret.TouchEvent): void;
        you(): void;
        zuo(): void;
        xia(): void;
        shang(): void;
        iswin(): void;
    }
}
declare module childGame {
    class MiniGameCubeStopMediator extends puremvc.Mediator implements puremvc.IMediator {
        static NAME: string;
        constructor(viewComponent: any);
        initData(): Promise<void>;
        private dataList;
        private selectedList;
        selectItem(): void;
        readonly cubeStop: MiniGameCubeStop;
    }
}
declare module childGame {
    class ApplicationFacade extends puremvc.Facade implements puremvc.IFacade {
        private static instance;
        constructor();
        static STARTUP: string;
        static getInstance(): ApplicationFacade;
        initializeController(): void;
        /**
         * 启动PureMVC，在应用程序中调用此方法，并传递应用程序本身的引用
         * @param	rootView	-	PureMVC应用程序的根视图root，包含其它所有的View Componet
         */
        startUp(rootView: egret.DisplayObjectContainer): void;
        registerMediator(mediator: puremvc.IMediator): void;
    }
}
declare module childGame {
    class MiniGameInputMediator extends puremvc.Mediator implements puremvc.IMediator {
        static NAME: string;
        constructor(viewComponent: any);
        initData(): Promise<void>;
        inputTextList: Array<string>;
        isSend: boolean;
        private focusOut(e);
        private confirmClick();
        readonly gameInput: MiniGameInput;
    }
}
declare module childGame {
    class MiniGameJigsawM08Mediator extends puremvc.Mediator implements puremvc.IMediator {
        static NAME: string;
        constructor(viewComponent: any);
        initData(): Promise<void>;
        jigsawImgGroupList: Array<eui.Group>;
        emptyIndex: number;
        jigsawImgclick(index: number): void;
        setResult(): void;
        readonly gameJigsaw: MiniGameJigsawM08;
    }
}
declare module childGame {
    class MiniGameJigsawM16Mediator extends puremvc.Mediator implements puremvc.IMediator {
        static NAME: string;
        constructor(viewComponent: any);
        initData(): Promise<void>;
        jigsawImgGroupList: Array<eui.Group>;
        draggedObject: eui.Group;
        offsetX: number;
        offsetY: number;
        beforeX: number;
        beforeY: number;
        private onMove(e);
        private touchBegin(e);
        private touchEnd(e);
        private touchReleaseOutside(e);
        setResult(): void;
        readonly gameJigsaw: MiniGameJigsawM16;
    }
}
declare module childGame {
    class MiniGameM42Mediator extends puremvc.Mediator implements puremvc.IMediator {
        static NAME: string;
        constructor(viewComponent: any);
        initData(): Promise<void>;
        jigsawNameList: Array<string>;
        nowIndex: number;
        private _colorFlilter;
        leftClick(): void;
        rightClick(): void;
        confirmClick(): void;
        setResult(): void;
        btnEDClick(): void;
        btnBackClick(): void;
        readonly miniGame: MiniGameM42;
    }
}
declare module childGame {
    class MiniGameMediator extends puremvc.Mediator implements puremvc.IMediator {
        static NAME: string;
        private proxy;
        constructor(viewComponent: any);
        gameName: any;
        initData(): void;
        private getGameDisplayObject(gameName);
        listNotificationInterests(): Array<any>;
        handleNotification(notification: puremvc.INotification): void;
        readonly miniGame: MiniGame;
    }
}
declare module childGame {
    class MiniGameSelectMediator extends puremvc.Mediator implements puremvc.IMediator {
        static NAME: string;
        constructor(viewComponent: any);
        private _selectOptions;
        readonly selectOptions: Map<string, any>;
        optionsItem: any;
        options: any;
        initData(): Promise<void>;
        selectItem(): void;
        readonly gameSelect: MiniGameSelect;
    }
}
declare module childGame {
    class SceneDetailsWindowMediator extends puremvc.Mediator implements puremvc.IMediator {
        static NAME: string;
        private proxy;
        constructor(viewComponent: any);
        initData(): void;
        backClick(): void;
        previewClick(): void;
        listNotificationInterests(): Array<any>;
        handleNotification(notification: puremvc.INotification): void;
        readonly sceneDetailsWindow: SceneDetailsWindow;
    }
}
declare module childGame {
    class SceneSummaryWindowMediator extends puremvc.Mediator implements puremvc.IMediator {
        static NAME: string;
        private proxy;
        constructor(viewComponent: any);
        private loadResGroup();
        initData(): void;
        backClick(): void;
        listNotificationInterests(): Array<any>;
        handleNotification(notification: puremvc.INotification): void;
        readonly sceneSummaryWindow: SceneSummaryWindow;
    }
}
declare module childGame {
    class StartScreenMediator extends puremvc.Mediator implements puremvc.IMediator {
        static NAME: string;
        private proxy;
        constructor(viewComponent: any);
        initData(): void;
        entryGame(): void;
        newGame(): void;
        showManage(): void;
        showDeveloper(): void;
        pictClick(): void;
        storeClick(): void;
        shareClick(): void;
        settingClick(): void;
        listNotificationInterests(): Array<any>;
        handleNotification(notification: puremvc.INotification): void;
        readonly startScreen: StartScreen;
    }
}
declare module childGame {
    class StoreWindowMediator extends puremvc.Mediator implements puremvc.IMediator {
        static NAME: string;
        private proxy;
        constructor(viewComponent: any);
        initData(): void;
        backClick(): void;
        listNotificationInterests(): Array<any>;
        handleNotification(notification: puremvc.INotification): void;
        readonly storeWindow: StoreWindow;
    }
}
declare module childGame {
    class CubeStopItemRenderer extends eui.ItemRenderer {
        constructor();
        private img;
        protected createChildren(): void;
        protected dataChanged(): void;
    }
}
declare module childGame {
    class DeveloperWindow extends eui.Panel {
        constructor();
        createCompleteEvent(event: eui.UIEvent): void;
    }
}
declare module childGame {
    class GameScreen extends eui.Component {
        constructor();
        createCompleteEvent(event: eui.UIEvent): void;
        btnBack: eui.Button;
        btnSave: eui.Button;
        btnManage: eui.Button;
        btnPicture: eui.Button;
        questionRes: string;
        question: string;
        points: string;
        description: string;
        showMiniGame: boolean;
        showScene: boolean;
        showTransition: boolean;
        transitionText: string;
        sceneGroup: eui.Group;
        questionGroup: eui.Group;
        textGroup: eui.Group;
        huangAndMubar: eui.Group;
        scrollGroup: eui.Scroller;
        bottomGroup: eui.Group;
        plotSelectList: eui.List;
        nextTest: eui.Button;
        btnTips: eui.Button;
        btnHelp: eui.Button;
        sceneBg: eui.Image;
        sceneAddGroup: eui.Group;
        inputGroup: MiniGameInput;
        selectGroup: MiniGameSelect;
        showInput(answer: string): void;
        showSelect(optionsId: number): void;
    }
}
declare module childGame {
    class InputItemRenderer extends eui.ItemRenderer {
        constructor();
        private buttonImg;
        protected createChildren(): void;
        protected dataChanged(): void;
    }
}
declare module childGame {
    class ManageWindow extends eui.Panel {
        constructor();
        createCompleteEvent(event: eui.UIEvent): void;
    }
}
declare module childGame {
    class MiniGame extends eui.Component {
        constructor();
        private _miniGame;
        addMiniGame(className?: string): void;
        addMiniGameObject(displayObject: egret.DisplayObject): void;
        clearStage(): void;
        createCompleteEvent(event: eui.UIEvent): void;
    }
}
declare module childGame {
    class MiniGameCubeStop extends eui.Component {
        constructor();
        createCompleteEvent(event: eui.UIEvent): void;
        buttonList: eui.List;
    }
}
declare module childGame {
    class MiniGameFloorSwitch extends eui.Component {
        constructor();
        createCompleteEvent(event: eui.UIEvent): void;
        buttonList: eui.List;
    }
}
declare module childGame {
    class MiniGameInput extends eui.Component {
        constructor();
        createCompleteEvent(event: eui.UIEvent): void;
        answerInput: eui.TextInput;
        inputItemList: eui.List;
        answer: string;
        btnConfirm: eui.Button;
        setAnswer(str: string): void;
    }
}
declare module childGame {
    class MiniGameJigsawM08 extends eui.Component {
        constructor();
        createCompleteEvent(event: eui.UIEvent): void;
        jigsawImgGroup1: eui.Group;
        jigsawImgGroup2: eui.Group;
        jigsawImgGroup3: eui.Group;
        jigsawImgGroup4: eui.Group;
        jigsawImgGroup5: eui.Group;
        jigsawImgGroup6: eui.Group;
        jigsawImgGroup7: eui.Group;
        jigsawImgGroup8: eui.Group;
        jigsawImgGroup9: eui.Group;
    }
}
declare module childGame {
    class MiniGameJigsawM16 extends eui.Component {
        constructor();
        createCompleteEvent(event: eui.UIEvent): void;
        jigsawImgGroup1: eui.Group;
        jigsawImgGroup2: eui.Group;
        jigsawImgGroup3: eui.Group;
        jigsawImgGroup4: eui.Group;
    }
}
declare module childGame {
    class MiniGameM42 extends eui.Component {
        constructor();
        createCompleteEvent(event: eui.UIEvent): void;
        jigsawGroup: eui.Group;
        btnGroup: eui.Group;
        jigsawResult: eui.Group;
        btnLeft: eui.Button;
        btnRight: eui.Button;
        btnED: eui.Button;
        btnConfirm: eui.Button;
        btnReset: eui.Button;
        btnBack: eui.Button;
        showTipsImg: boolean;
    }
}
declare module childGame {
    class MiniGameSelect extends eui.Component {
        constructor();
        createCompleteEvent(event: eui.UIEvent): void;
        buttonList: eui.List;
        optionsId: number;
        setOptionsId(optionsId: number): void;
    }
}
declare module childGame {
    class QuestionSelectItemRenderer extends eui.ItemRenderer {
        constructor();
        protected createChildren(): void;
        fontSize: number;
        protected dataChanged(): void;
    }
}
declare module childGame {
    class SceneDetailsItemRenderer extends eui.ItemRenderer {
        constructor();
        protected createChildren(): void;
        protected dataChanged(): void;
    }
}
declare module childGame {
    class SceneDetailsWindow extends eui.Panel {
        constructor();
        createCompleteEvent(event: eui.UIEvent): void;
        btnBack: eui.Button;
        sceneList: eui.List;
        scrollGroup: eui.Scroller;
        type: string;
        titleRes: string;
        collectedText: string;
        setSceneType(type: string): void;
    }
}
declare module childGame {
    class SceneSummaryWindow extends eui.Panel {
        constructor();
        createCompleteEvent(event: eui.UIEvent): void;
        btnBack: eui.Button;
        btnSceneBg: eui.Button;
        btnScenePerson: eui.Button;
        btnSceneProps: eui.Button;
        collectedText: string;
        finishText: string;
    }
}
declare module childGame {
    class SettingWindow extends eui.Panel {
        constructor();
        createCompleteEvent(event: eui.UIEvent): void;
    }
}
declare module childGame {
    class StartScreen extends eui.Component {
        navigationBar: eui.Group;
        constructor();
        createCompleteEvent(event: eui.UIEvent): void;
        partAdded(partName: any, instance: any): void;
        btnResumeGame: eui.Button;
        btnNewGame: eui.Button;
        btnManage: eui.Button;
        btnDev: eui.Button;
        btnPicture: eui.Button;
        btnStore: eui.Button;
        btnShare: eui.Button;
        btnSetting: eui.Button;
    }
}
declare module childGame {
    class StoreWindow extends eui.Panel {
        constructor();
        createCompleteEvent(event: eui.UIEvent): void;
        btnBack: eui.Button;
        scrollGroup: eui.Scroller;
        shoplist: eui.List;
    }
}
declare module childGame {
    class SwitchItemRenderer extends eui.ItemRenderer {
        constructor();
        private buttonImg;
        protected createChildren(): void;
        protected dataChanged(): void;
    }
}
declare module childGame {
    class shop_list extends eui.ItemRenderer {
        pay: eui.Group;
        pay_money: eui.Label;
        constructor();
        haha(): void;
    }
}
declare module childGame {
    class wordList extends eui.ItemRenderer {
        constructor();
    }
}
