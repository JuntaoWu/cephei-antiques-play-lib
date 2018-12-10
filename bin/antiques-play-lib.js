var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var childGame;
(function (childGame) {
    var MiniGameFloorSwitchMediator = (function (_super) {
        __extends(MiniGameFloorSwitchMediator, _super);
        function MiniGameFloorSwitchMediator(viewComponent) {
            var _this = _super.call(this, MiniGameFloorSwitchMediator.NAME, viewComponent) || this;
            _this.selectedList = [];
            _super.prototype.initializeNotifier.call(_this, "ChildApplicationFacade");
            _this.floorSwitch.buttonList.addEventListener(eui.ItemTapEvent.ITEM_TAP, _this.selectItem, _this);
            _this.floorSwitch.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initData, _this);
            return _this;
        }
        MiniGameFloorSwitchMediator.prototype.initData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var len, i, index, temp;
                return __generator(this, function (_a) {
                    this.dataList = [
                        { name: "虎", img: "m18_1", isSelected: false },
                        { name: "虎", img: "m18_2", isSelected: false },
                        { name: "虎", img: "m18_3", isSelected: false },
                        { name: "蛇", img: "m18_4", isSelected: false },
                        { name: "蛇", img: "m18_5", isSelected: false },
                        { name: "狼", img: "m18_6", isSelected: false },
                        { name: "狼", img: "m18_7", isSelected: false },
                        { name: "鹰", img: "m18_8", isSelected: false },
                        { name: "鹰", img: "m18_9", isSelected: false }
                    ];
                    len = this.dataList.length;
                    for (i = 0; i < len - 1; i++) {
                        index = Math.floor(Math.random() * (len - i));
                        temp = this.dataList[index];
                        this.dataList[index] = this.dataList[len - i - 1];
                        this.dataList[len - i - 1] = temp;
                    }
                    this.floorSwitch.buttonList.dataProvider = new eui.ArrayCollection(this.dataList);
                    this.floorSwitch.buttonList.itemRenderer = childGame.SwitchItemRenderer;
                    return [2 /*return*/];
                });
            });
        };
        MiniGameFloorSwitchMediator.prototype.selectItem = function () {
            var _this = this;
            console.log(this.floorSwitch.buttonList.selectedItem);
            var selectedItem = this.floorSwitch.buttonList.selectedItem;
            if (!this.selectedList.find(function (i) { return i.img == selectedItem.img; })) {
                if (this.selectedList.length < 3) {
                    this.selectedList.push(this.floorSwitch.buttonList.selectedItem);
                }
                else {
                    this.selectedList.shift();
                    this.selectedList.push(this.floorSwitch.buttonList.selectedItem);
                }
            }
            else {
                var index = this.selectedList.findIndex(function (i) { return i.img == selectedItem.img; });
                this.selectedList.splice(index, 1);
            }
            if (this.selectedList.length == 3) {
                var isRight = !this.selectedList.find(function (i) { return i.name != "虎"; });
                if (isRight) {
                    this.floorSwitch.buttonList.touchEnabled = false;
                    this.floorSwitch.buttonList.touchChildren = false;
                    this.sendNotification(childGame.GameProxy.PASS_MINIGAME);
                }
            }
            this.dataList.forEach(function (i) {
                i.isSelected = false;
                if (_this.selectedList.find(function (v) { return v.img == i.img; })) {
                    i.isSelected = true;
                }
            });
            this.floorSwitch.buttonList.dataProvider = new eui.ArrayCollection(this.dataList);
            this.floorSwitch.buttonList.itemRenderer = childGame.SwitchItemRenderer;
        };
        Object.defineProperty(MiniGameFloorSwitchMediator.prototype, "floorSwitch", {
            get: function () {
                return (this.viewComponent);
            },
            enumerable: true,
            configurable: true
        });
        MiniGameFloorSwitchMediator.NAME = "MiniGameFloorSwitchMediator";
        return MiniGameFloorSwitchMediator;
    }(puremvc.Mediator));
    childGame.MiniGameFloorSwitchMediator = MiniGameFloorSwitchMediator;
    __reflect(MiniGameFloorSwitchMediator.prototype, "childGame.MiniGameFloorSwitchMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var AccountAdapter = (function () {
        function AccountAdapter() {
        }
        AccountAdapter.checkForUpdate = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var version, request;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (platform.name == "DebugPlatform") {
                                            return [2 /*return*/, resolve({
                                                    hasUpdate: false
                                                })];
                                        }
                                        return [4 /*yield*/, platform.getVersion()];
                                    case 1:
                                        version = (_a.sent()) || 0;
                                        console.log("Check version begin, current version is: " + version);
                                        request = new egret.HttpRequest();
                                        request.responseType = egret.HttpResponseType.TEXT;
                                        request.open(childGame.Constants.Endpoints.service + "version/check?version=" + version, egret.HttpMethod.GET);
                                        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                                        request.send();
                                        request.addEventListener(egret.Event.COMPLETE, function (event) {
                                            var req = (event.currentTarget);
                                            var res = JSON.parse(req.response);
                                            if (res.error) {
                                                console.error(res.message);
                                                reject(res.message);
                                            }
                                            else {
                                                console.log("Check version end, lastest version is: " + (res.data && res.data.version || version));
                                                resolve(res.data);
                                            }
                                        }, this);
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                });
            });
        };
        return AccountAdapter;
    }());
    childGame.AccountAdapter = AccountAdapter;
    __reflect(AccountAdapter.prototype, "childGame.AccountAdapter");
})(childGame || (childGame = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var childGame;
(function (childGame) {
    var AssetAdapter = (function () {
        function AssetAdapter() {
        }
        /**
         * @language zh_CN
         * 解析素材
         * @param source 待解析的新素材标识符
         * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
         * @param thisObject callBack的 this 引用
         */
        AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
            function onGetRes(data) {
                compFunc.call(thisObject, data, source);
            }
            if (RES.hasRes(source)) {
                var data = RES.getRes(source);
                if (data) {
                    onGetRes(data);
                }
                else {
                    RES.getResAsync(source, onGetRes, this);
                }
            }
            else {
                RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
            }
        };
        return AssetAdapter;
    }());
    childGame.AssetAdapter = AssetAdapter;
    __reflect(AssetAdapter.prototype, "childGame.AssetAdapter", ["eui.IAssetAdapter"]);
})(childGame || (childGame = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var childGame;
(function (childGame) {
    var LoadingUI = (function (_super) {
        __extends(LoadingUI, _super);
        function LoadingUI() {
            var _this = _super.call(this) || this;
            _this.skinName = "LoadingUI";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        LoadingUI.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
            this.progressBg.y = this.stage.stageHeight - 30;
            this.progressBar.y = this.stage.stageHeight - 30;
            this.loadingLabel.y = this.stage.stageHeight - 60;
        };
        LoadingUI.prototype.onProgress = function (current, total) {
            this.labelText.text = current + "/" + total;
            this.progressBar.width = this.stage.width * current / total;
        };
        LoadingUI.prototype.showInformation = function (message) {
            this.loadingText.text = message;
            this.labelText.text = "";
        };
        return LoadingUI;
    }(eui.Component));
    childGame.LoadingUI = LoadingUI;
    __reflect(LoadingUI.prototype, "childGame.LoadingUI", ["RES.PromiseTaskReporter"]);
})(childGame || (childGame = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var childGame;
(function (childGame) {
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Main.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            Object.entries = typeof Object.entries === 'function' ? Object.entries : function (obj) { return Object.keys(obj).map(function (k) { return [k, obj[k]]; }); };
            egret.lifecycle.addLifecycleListener(function (context) {
                // custom lifecycle plugin
            });
            egret.lifecycle.onPause = function () {
                egret.ticker.pause();
            };
            egret.lifecycle.onResume = function () {
                egret.ticker.resume();
            };
            //inject the custom material parser
            //注入自定义的素材解析器
            var assetAdapter = new childGame.AssetAdapter();
            egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
            egret.registerImplementation("eui.IThemeAdapter", new childGame.ThemeAdapter());
            this.runGame().catch(function (e) {
                console.log(e);
            });
        };
        Main.prototype.runGame = function () {
            return __awaiter(this, void 0, void 0, function () {
                var userInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.loadResource()];
                        case 1:
                            _a.sent();
                            this.createGameScene();
                            return [4 /*yield*/, platform.login()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, platform.getUserInfo()];
                        case 3:
                            userInfo = _a.sent();
                            console.log(userInfo);
                            return [2 /*return*/];
                    }
                });
            });
        };
        Main.prototype.loadResource = function () {
            return __awaiter(this, void 0, void 0, function () {
                var checkVersionResult, loadingView, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 6, , 7]);
                            return [4 /*yield*/, childGame.AccountAdapter.checkForUpdate()];
                        case 1:
                            checkVersionResult = _a.sent();
                            if (checkVersionResult.hasUpdate) {
                                platform.applyUpdate(checkVersionResult.version);
                            }
                            return [4 /*yield*/, RES.loadConfig("antiques-play.res.json", childGame.Constants.ResourceEndpoint + "resource/")];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.loadTheme()];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, RES.loadGroup("loading", 1)];
                        case 4:
                            _a.sent();
                            loadingView = new childGame.LoadingUI();
                            this.stage.addChild(loadingView);
                            return [4 /*yield*/, RES.loadGroup("antiques-preload", 0, loadingView)];
                        case 5:
                            _a.sent();
                            RES.loadGroup("antiques-lazyload", 0);
                            this.stage.removeChild(loadingView);
                            return [3 /*break*/, 7];
                        case 6:
                            e_1 = _a.sent();
                            console.error(e_1);
                            return [3 /*break*/, 7];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        Main.prototype.loadTheme = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                // load skin theme configuration file, you can manually modify the file. And replace the default skin.
                //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
                var theme = new eui.Theme("resource/antiques-play.thm.json", _this.stage);
                theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                    resolve();
                }, _this);
            });
        };
        /**
         * 创建场景界面
         * Create scene interface
         */
        Main.prototype.createGameScene = function () {
            var appContainer = new childGame.AppContainer();
            this.addChild(appContainer);
            childGame.ApplicationFacade.getInstance().startUp(appContainer);
        };
        /**
         * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
         * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
         */
        Main.prototype.createBitmapByName = function (name) {
            var result = new egret.Bitmap();
            var texture = RES.getRes(name);
            result.texture = texture;
            return result;
        };
        /**
         * 点击按钮
         * Click the button
         */
        Main.prototype.onButtonClick = function (e) {
            var panel = new eui.Panel();
            panel.title = "Title";
            panel.horizontalCenter = 0;
            panel.verticalCenter = 0;
            this.addChild(panel);
        };
        return Main;
    }(eui.UILayer));
    childGame.Main = Main;
    __reflect(Main.prototype, "childGame.Main");
})(childGame || (childGame = {}));
/**
 * 平台数据接口。
 * 由于每款游戏通常需要发布到多个平台上，所以提取出一个统一的接口用于开发者获取平台数据信息
 * 推荐开发者通过这种方式封装平台逻辑，以保证整体结构的稳定
 * 由于不同平台的接口形式各有不同，白鹭推荐开发者将所有接口封装为基于 Promise 的异步形式
 */
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var childGame;
(function (childGame) {
    var ThemeAdapter = (function () {
        function ThemeAdapter() {
        }
        /**
         * 解析主题
         * @param url 待解析的主题url
         * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
         * @param onError 解析失败回调函数，示例：errorFunc():void;
         * @param thisObject 回调的this引用
         */
        ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
            var _this = this;
            function onResGet(e) {
                onSuccess.call(thisObject, e);
            }
            function onResError(e) {
                if (e.resItem.url == url) {
                    RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                    onError.call(thisObject);
                }
            }
            if (typeof generateEUI !== 'undefined') {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI);
                }, this);
            }
            else if (typeof generateEUI2 !== 'undefined') {
                RES.getResByUrl("resource/gameEui.json", function (data, url) {
                    window["JSONParseClass"]["setData"](data);
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateEUI2);
                    }, _this);
                }, this, RES.ResourceItem.TYPE_JSON);
            }
            else if (typeof generateJSON !== 'undefined') {
                if (url.indexOf(".exml") > -1) {
                    var dataPath = url.split("/");
                    dataPath.pop();
                    var dirPath = dataPath.join("/") + "_EUI.json";
                    if (!generateJSON.paths[url]) {
                        RES.getResByUrl(dirPath, function (data) {
                            window["JSONParseClass"]["setData"](data);
                            egret.callLater(function () {
                                onSuccess.call(thisObject, generateJSON.paths[url]);
                            }, _this);
                        }, this, RES.ResourceItem.TYPE_JSON);
                    }
                    else {
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, this);
                    }
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON);
                    }, this);
                }
            }
            else {
                RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
            }
        };
        return ThemeAdapter;
    }());
    childGame.ThemeAdapter = ThemeAdapter;
    __reflect(ThemeAdapter.prototype, "childGame.ThemeAdapter", ["eui.IThemeAdapter"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var AppContainer = (function (_super) {
        __extends(AppContainer, _super);
        function AppContainer() {
            var _this = _super.call(this) || this;
            _this.startScreen = new childGame.StartScreen();
            _this.gameScreen = new childGame.GameScreen();
            _this.storeWindow = new childGame.StoreWindow();
            _this.alpha = 0;
            return _this;
        }
        /**
         * 进入开始页面
         */
        AppContainer.prototype.enterStartScreen = function () {
            this.gameScreen.parent && this.removeChild(this.gameScreen);
            this.addChild(this.startScreen);
            egret.Tween.get(this).to({ alpha: 1 }, 1500);
        };
        AppContainer.prototype.enterGameScreen = function () {
            this.startScreen.parent && this.removeChild(this.startScreen);
            this.addChild(this.gameScreen);
            egret.Tween.get(this).to({ alpha: 1 }, 1500);
        };
        AppContainer.prototype.showStoreWindow = function () {
            if (!this.storeWindow) {
                this.storeWindow = new childGame.StoreWindow();
            }
            this.addChild(this.storeWindow);
            egret.Tween.get(this).to({ alpha: 1 }, 1500);
        };
        AppContainer.prototype.showSceneSummaryWindow = function () {
            if (!this.sceneWindow) {
                this.sceneWindow = new childGame.SceneSummaryWindow();
            }
            this.addChild(this.sceneWindow);
            egret.Tween.get(this).to({ alpha: 1 }, 1500);
        };
        AppContainer.prototype.showSceneDetailsWindow = function (type) {
            if (!this.sceneDetailsWindow) {
                this.sceneDetailsWindow = new childGame.SceneDetailsWindow();
            }
            this.sceneDetailsWindow.setSceneType(type);
            this.addChild(this.sceneDetailsWindow);
            egret.Tween.get(this).to({ alpha: 1 }, 1500);
        };
        AppContainer.prototype.showDeveloperWindow = function () {
            if (!this.developerWindow) {
                this.developerWindow = new childGame.DeveloperWindow();
            }
            this.addChild(this.developerWindow);
            egret.Tween.get(this).to({ alpha: 1 }, 1500);
        };
        AppContainer.prototype.showManageWindow = function () {
            if (!this.manageWindow) {
                this.manageWindow = new childGame.ManageWindow();
            }
            this.addChild(this.manageWindow);
            egret.Tween.get(this).to({ alpha: 1 }, 1500);
        };
        AppContainer.prototype.showSettingWindow = function () {
            if (!this.settingWindow) {
                this.settingWindow = new childGame.SettingWindow();
            }
            this.addChild(this.settingWindow);
            egret.Tween.get(this).to({ alpha: 1 }, 1500);
        };
        return AppContainer;
    }(eui.UILayer));
    childGame.AppContainer = AppContainer;
    __reflect(AppContainer.prototype, "childGame.AppContainer");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var ControllerPrepCommand = (function (_super) {
        __extends(ControllerPrepCommand, _super);
        function ControllerPrepCommand() {
            return _super.call(this) || this;
        }
        ControllerPrepCommand.prototype.execute = function (notification) {
            (new childGame.GameCommand()).register();
            (new childGame.SceneCommand()).register();
        };
        return ControllerPrepCommand;
    }(puremvc.SimpleCommand));
    childGame.ControllerPrepCommand = ControllerPrepCommand;
    __reflect(ControllerPrepCommand.prototype, "childGame.ControllerPrepCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var ModelPrepCommand = (function (_super) {
        __extends(ModelPrepCommand, _super);
        function ModelPrepCommand() {
            return _super.call(this) || this;
        }
        ModelPrepCommand.prototype.execute = function (notification) {
            // this.facade().registerProxy(new AccountProxy());
            this.facade().registerProxy(new childGame.GameProxy());
        };
        return ModelPrepCommand;
    }(puremvc.SimpleCommand));
    childGame.ModelPrepCommand = ModelPrepCommand;
    __reflect(ModelPrepCommand.prototype, "childGame.ModelPrepCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var StartupCommand = (function (_super) {
        __extends(StartupCommand, _super);
        function StartupCommand() {
            return _super.call(this) || this;
        }
        StartupCommand.prototype.initializeMacroCommand = function () {
            this.addSubCommand(childGame.ControllerPrepCommand);
            this.addSubCommand(childGame.ModelPrepCommand);
            this.addSubCommand(childGame.ViewPrepCommand);
        };
        return StartupCommand;
    }(puremvc.MacroCommand));
    childGame.StartupCommand = StartupCommand;
    __reflect(StartupCommand.prototype, "childGame.StartupCommand");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var ViewPrepCommand = (function (_super) {
        __extends(ViewPrepCommand, _super);
        function ViewPrepCommand() {
            return _super.call(this) || this;
        }
        ViewPrepCommand.prototype.execute = function (notification) {
            var main = notification.getBody();
            this.facade().registerMediator(new childGame.ApplicationMediator(main));
        };
        return ViewPrepCommand;
    }(puremvc.SimpleCommand));
    childGame.ViewPrepCommand = ViewPrepCommand;
    __reflect(ViewPrepCommand.prototype, "childGame.ViewPrepCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var GameCommand = (function (_super) {
        __extends(GameCommand, _super);
        function GameCommand() {
            return _super.call(this) || this;
        }
        /**
         * 注册消息
         */
        GameCommand.prototype.register = function () {
            this.initializeNotifier("ChildApplicationFacade");
            this.facade().registerCommand(GameCommand.START_GAME, GameCommand);
        };
        GameCommand.prototype.execute = function (notification) {
            return __awaiter(this, void 0, void 0, function () {
                var gameProxy, data;
                return __generator(this, function (_a) {
                    gameProxy = (this.facade().retrieveProxy(childGame.GameProxy.NAME));
                    data = notification.getBody();
                    switch (notification.getName()) {
                    }
                    return [2 /*return*/];
                });
            });
        };
        GameCommand.NAME = "GameCommand";
        /**
         * 开始游戏
         */
        GameCommand.START_GAME = "start_game";
        return GameCommand;
    }(puremvc.SimpleCommand));
    childGame.GameCommand = GameCommand;
    __reflect(GameCommand.prototype, "childGame.GameCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
/**
 * Created by xzper on 2014/11/15.
 */
var childGame;
(function (childGame) {
    var SceneCommand = (function (_super) {
        __extends(SceneCommand, _super);
        function SceneCommand() {
            return _super.call(this) || this;
        }
        SceneCommand.prototype.register = function () {
            this.initializeNotifier("ChildApplicationFacade");
        };
        SceneCommand.prototype.initializeNotifier = function (key) {
            _super.prototype.initializeNotifier.call(this, key);
            this.facade().registerCommand(SceneCommand.CHANGE, SceneCommand);
            this.facade().registerCommand(SceneCommand.SHOW_MANAGE, SceneCommand);
            this.facade().registerCommand(SceneCommand.SHOW_DEVE, SceneCommand);
            this.facade().registerCommand(SceneCommand.SHOW_STORE, SceneCommand);
            this.facade().registerCommand(SceneCommand.SHOW_SCENE, SceneCommand);
            this.facade().registerCommand(SceneCommand.SHOW_SCENE_DETAILS, SceneCommand);
            this.facade().registerCommand(SceneCommand.SHOW_SETTING, SceneCommand);
        };
        SceneCommand.prototype.execute = function (notification) {
            return __awaiter(this, void 0, void 0, function () {
                var data, appMediator, gameProxy;
                return __generator(this, function (_a) {
                    data = notification.getBody();
                    appMediator = this.facade().retrieveMediator(childGame.ApplicationMediator.NAME);
                    gameProxy = this.facade().retrieveProxy(childGame.GameProxy.NAME);
                    switch (notification.getName()) {
                        case SceneCommand.CHANGE:
                            if (data == childGame.Scene.Start) {
                                appMediator.main.enterStartScreen();
                            }
                            else if (data == childGame.Scene.Game) {
                                appMediator.main.enterGameScreen();
                            }
                            break;
                        case SceneCommand.SHOW_STORE:
                            appMediator.main.showStoreWindow();
                            break;
                        case SceneCommand.SHOW_SCENE:
                            appMediator.main.showSceneSummaryWindow();
                            break;
                        case SceneCommand.SHOW_SCENE_DETAILS:
                            appMediator.main.showSceneDetailsWindow(data);
                            break;
                        case SceneCommand.SHOW_DEVE:
                            appMediator.main.showDeveloperWindow();
                            break;
                        case SceneCommand.SHOW_MANAGE:
                            appMediator.main.showManageWindow();
                            break;
                        case SceneCommand.SHOW_SETTING:
                            appMediator.main.showSettingWindow();
                            break;
                    }
                    return [2 /*return*/];
                });
            });
        };
        SceneCommand.NAME = "SceneCommand";
        /**
         * 切换场景
         */
        SceneCommand.CHANGE = "scene_change";
        SceneCommand.SHOW_MANAGE = "show_manage";
        SceneCommand.SHOW_DEVE = "show_developer";
        SceneCommand.SHOW_STORE = "show_store";
        SceneCommand.SHOW_SCENE = "show_scene";
        SceneCommand.SHOW_SCENE_DETAILS = "show_scene_details";
        SceneCommand.SHOW_SETTING = "show_setting";
        return SceneCommand;
    }(puremvc.SimpleCommand));
    childGame.SceneCommand = SceneCommand;
    __reflect(SceneCommand.prototype, "childGame.SceneCommand", ["puremvc.ICommand", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var EffectManager = (function () {
        function EffectManager() {
        }
        EffectManager.playEffect = function (effect) {
            var target = this;
            switch (effect) {
                case "放大":
                    EffectManager.beBig(target);
                    break;
                case "消失":
                    EffectManager.disappear2(target);
                    break;
                case "渐变消失":
                    EffectManager.disappear(target);
                    break;
                case "渐变出现":
                    EffectManager.gradualShow(target);
                    break;
                case "头晕目眩":
                    EffectManager.vagueImage(target);
                    break;
                case "睁眼":
                    EffectManager.gradualShow2(target);
                    break;
                case "晃动":
                    EffectManager.shakeTarget(target);
                    break;
                case "剧烈抖动":
                    EffectManager.shakeTargetSevere(target);
                    break;
                case "渐亮":
                    EffectManager.gradualClear(target);
                    break;
                case "放大一下消失":
                    EffectManager.beBigAndDisappear(target);
                    break;
                case "由模糊变清晰":
                    EffectManager.vagueToClear(target);
                    break;
                case "画面慢慢变模糊变黑":
                    EffectManager.gradualVague(target);
                    break;
            }
        };
        //放大
        EffectManager.beBig = function (target) {
            egret.Tween.get(target).to({ scaleX: 1.2, scaleY: 1.2 }, 100);
        };
        //渐变消失
        EffectManager.disappear = function (target) {
            egret.Tween.get(target).to({ alpha: 0 }, 800);
        };
        //渐亮
        EffectManager.gradualClear = function (target) {
            target.alpha = 0.8;
            egret.Tween.get(target).to({ alpha: 1 }, 800);
        };
        //放大一下消失
        EffectManager.beBigAndDisappear = function (target) {
            egret.Tween.get(target).to({ scaleX: 1.2, scaleY: 1.2 }, 100).to({ alpha: 0 }, 500);
        };
        //消失
        EffectManager.disappear2 = function (target) {
            target.alpha = 0;
        };
        //渐变出现
        EffectManager.gradualShow = function (target) {
            target.alpha = 0;
            egret.Tween.get(target).to({ alpha: 1 }, 800);
        };
        //剧烈抖动
        EffectManager.shakeTargetSevere = function (target) {
            egret.Tween.get(target, { "loop": true }).to({ x: -10 }, 200).to({ x: 10 }, 400).to({ x: 0 }, 200);
            egret.setTimeout(function () {
                egret.Tween.removeTweens(target);
                target.x = 0;
            }, this, 4000);
        };
        //晃动
        EffectManager.shakeTarget = function (target) {
            egret.Tween.get(target, { "loop": true }).to({ x: -10 }, 500).to({ x: 10 }, 1000).to({ x: 0 }, 500);
            egret.setTimeout(function () {
                egret.Tween.removeTweens(target);
                target.x = 0;
            }, this, 4000);
        };
        //睁眼效果
        EffectManager.gradualShow2 = function (target) {
            var m = new egret.Shape();
            m.name = "added";
            target.parent.addChild(m);
            m.x = target.width / 2;
            m.y = target.height / 2;
            var n = target.width;
            var intervalId = egret.setInterval(function () {
                m.graphics.beginFill(0xffffff);
                m.graphics.drawCircle(0, 0, target.width - n);
                m.graphics.endFill();
                target.mask = m;
                n -= 10;
            }, this, 40);
            egret.setTimeout(function () {
                m.parent && m.parent.removeChild(m);
                egret.clearInterval(intervalId);
            }, this, 3000);
        };
        //头晕目眩(场景图重影模糊)
        EffectManager.vagueImage = function (obj) {
            var target = obj;
            var img = new eui.Image();
            img.width = target.width;
            img.height = target.height;
            img.source = target.source;
            img.alpha = 0.3;
            var n = target.parent.getChildIndex(target) + 1;
            img.name = "added";
            target.parent.addChildAt(img, n);
            egret.Tween.get(img, { "loop": true }).to({ x: -10, y: -10, rotation: 1 }, 500).to({ x: 10, y: 10, rotation: -1 }, 1000).to({ x: 0, y: 0, rotation: 0 }, 500);
            egret.setTimeout(function () {
                egret.Tween.removeTweens(img);
                img.parent && img.parent.removeChild(img);
            }, this, 4000);
        };
        // 由模糊变清晰
        EffectManager.vagueToClear = function (obj) {
            var target = obj;
            var img = new eui.Image();
            img.width = target.width;
            img.height = target.height;
            img.source = target.source;
            img.x = img.y = 2;
            img.alpha = 0.8;
            var n = target.parent.getChildIndex(target) + 1;
            img.name = "added";
            target.parent.addChildAt(img, n);
            egret.Tween.get(img).to({ alpha: 0, x: 0, y: 0 }, 1000).call(function () {
                img.parent && img.parent.removeChild(img);
            });
        };
        // 画面慢慢变模糊变黑
        EffectManager.gradualVague = function (obj) {
            var target = obj;
            var img = new eui.Image();
            img.width = target.width;
            img.height = target.height;
            img.source = target.source;
            img.x = img.y = 5;
            img.alpha = 0;
            var n = target.parent.getChildIndex(target) + 1;
            img.name = "added";
            target.parent.addChildAt(img, n);
            egret.Tween.get(img).to({ alpha: 0.6 }, 2000).to({ alpha: 0 }, 2000);
            egret.Tween.get(target).to({ alpha: 0 }, 4000).call(function () {
                img.parent && img.parent.removeChild(img);
            });
        };
        return EffectManager;
    }());
    childGame.EffectManager = EffectManager;
    __reflect(EffectManager.prototype, "childGame.EffectManager");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var GameProxy = (function (_super) {
        __extends(GameProxy, _super);
        function GameProxy() {
            var _this = _super.call(this, GameProxy.NAME) || this;
            _this.playerInfo = {
                plotId: 1,
                collectedScenes: [],
                fatigueValue: 1000,
            };
            _this.pointHunag = 43;
            _this.pointMu = 43;
            return _this;
        }
        Object.defineProperty(GameProxy.prototype, "questions", {
            get: function () {
                if (!this._questions) {
                    this._questions = new Map(Object.entries(RES.getRes("question_json")));
                }
                return this._questions;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameProxy.prototype, "chapterPlot", {
            get: function () {
                if (!this._chapterPlot) {
                    this._chapterPlot = new Map(Object.entries(RES.getRes("chapter-plot_json")));
                }
                return this._chapterPlot;
            },
            enumerable: true,
            configurable: true
        });
        GameProxy.prototype.getCurrentPlot = function () {
            return this.chapterPlot.get(this.playerInfo.plotId.toString());
        };
        Object.defineProperty(GameProxy.prototype, "sceneRes", {
            get: function () {
                if (!this._sceneRes) {
                    var config = RES.getRes("scene_json");
                    var dictionary = _(config).groupBy(function (a) { return a.type; }).value();
                    this._sceneRes = new Map(Object.entries(dictionary));
                }
                return this._sceneRes;
            },
            enumerable: true,
            configurable: true
        });
        GameProxy.NAME = "GameProxy";
        //小游戏
        GameProxy.SHOW_MINIGAME = "show_minigame";
        //通过小游戏
        GameProxy.PASS_MINIGAME = "pass_minigame";
        return GameProxy;
    }(puremvc.Proxy));
    childGame.GameProxy = GameProxy;
    __reflect(GameProxy.prototype, "childGame.GameProxy", ["puremvc.IProxy", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var CommonData = (function () {
        function CommonData() {
        }
        return CommonData;
    }());
    childGame.CommonData = CommonData;
    __reflect(CommonData.prototype, "childGame.CommonData");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var Constants = (function () {
        function Constants() {
        }
        Object.defineProperty(Constants, "ResourceEndpoint", {
            get: function () {
                return platform.name == "DebugPlatform" ? Constants.Endpoints.localResource : Constants.Endpoints.remoteResource;
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(Constants, "Endpoints", {
            get: function () {
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
                if (platform.env == "test") {
                    return {
                        service: "http://gdjzj.hzsdgames.com:8091/",
                        localResource: "",
                        remoteResource: "http://gdjzj.hzsdgames.com:8091/miniGame/"
                    };
                }
            },
            enumerable: true,
            configurable: true
        });
        return Constants;
    }());
    childGame.Constants = Constants;
    __reflect(Constants.prototype, "childGame.Constants");
    var Scene;
    (function (Scene) {
        Scene[Scene["Start"] = 1] = "Start";
        Scene[Scene["Game"] = 2] = "Game";
    })(Scene = childGame.Scene || (childGame.Scene = {}));
    childGame.gameKey = {
        FloorSwitch: "地板开关",
        CubeStop: "魔方停止",
    };
    childGame.gameType = {
        Input: "填空",
        Select: "选择",
        MiniGame: "小游戏",
    };
    childGame.SceneType = {
        SceneBg: "场景CG",
        ScenePerson: "人物CG",
        SceneProps: "道具CG",
    };
    childGame.plotType = {
        PlotChange: "切换",
        PlotAdded: "追加",
        PlotQuestion: "谜题",
        Transition: "转场特效",
        PageChange: "界面切换经营",
    };
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var PlayerInfo = (function () {
        function PlayerInfo() {
        }
        return PlayerInfo;
    }());
    childGame.PlayerInfo = PlayerInfo;
    __reflect(PlayerInfo.prototype, "childGame.PlayerInfo");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var Plot = (function () {
        function Plot() {
        }
        return Plot;
    }());
    childGame.Plot = Plot;
    __reflect(Plot.prototype, "childGame.Plot");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var QuestionGame = (function () {
        function QuestionGame() {
        }
        return QuestionGame;
    }());
    childGame.QuestionGame = QuestionGame;
    __reflect(QuestionGame.prototype, "childGame.QuestionGame");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var DragonBones = (function () {
        function DragonBones() {
        }
        DragonBones.createDragonBone = function (dragonBoneName, armatureName) {
            var egretFactory = dragonBones.EgretFactory.factory;
            if (!egretFactory.getDragonBonesData(dragonBoneName)) {
                var dragonbonesData = RES.getRes(dragonBoneName + "_ske_json");
                egretFactory.parseDragonBonesData(dragonbonesData);
            }
            if (!egretFactory.getTextureAtlasData(dragonBoneName)) {
                var textureData = RES.getRes(dragonBoneName + "_tex_json");
                var texture = RES.getRes(dragonBoneName + "_tex_png");
                egretFactory.parseTextureAtlasData(textureData, texture);
            }
            var armatureDisplay = egretFactory.buildArmatureDisplay(armatureName);
            // armatureDisplay.x = 200;
            // armatureDisplay.y = 300;
            // armatureDisplay.scaleX = 0.5;
            // armatureDisplay.scaleY = 0.5;
            return armatureDisplay;
        };
        return DragonBones;
    }());
    childGame.DragonBones = DragonBones;
    __reflect(DragonBones.prototype, "childGame.DragonBones");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var SoundPool = (function () {
        function SoundPool() {
        }
        SoundPool.playSoundEffect = function (soundName) {
            var sound = RES.getRes(soundName);
            if (!sound) {
                console.error("playSoundEffect: Unable to load sound: " + soundName);
                return;
            }
            return sound.play(0, 1);
        };
        SoundPool.stopBGM = function () {
            for (var name in SoundPool.musicClips) {
                if (SoundPool.musicClips.hasOwnProperty(name)) {
                    var chanel = SoundPool.musicClips[name];
                    chanel.stop();
                }
            }
        };
        SoundPool.playBGM = function (soundName) {
            SoundPool.stopBGM();
            var music = RES.getRes(soundName);
            if (!music) {
                console.error("playBGM: Unable to load music: " + soundName);
                return;
            }
            SoundPool.musicClips[soundName] = music.play();
            return SoundPool.musicClips[soundName];
        };
        SoundPool.musicClips = {};
        return SoundPool;
    }());
    childGame.SoundPool = SoundPool;
    __reflect(SoundPool.prototype, "childGame.SoundPool");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var ApplicationMediator = (function (_super) {
        __extends(ApplicationMediator, _super);
        function ApplicationMediator(viewComponent) {
            return _super.call(this, ApplicationMediator.NAME, viewComponent) || this;
        }
        ApplicationMediator.prototype.listNotificationInterests = function () {
            return [];
        };
        ApplicationMediator.prototype.handleNotification = function (notification) {
            switch (notification.getName()) {
            }
        };
        Object.defineProperty(ApplicationMediator.prototype, "main", {
            get: function () {
                return (this.viewComponent);
            },
            enumerable: true,
            configurable: true
        });
        ApplicationMediator.NAME = "ApplicationMediator";
        return ApplicationMediator;
    }(puremvc.Mediator));
    childGame.ApplicationMediator = ApplicationMediator;
    __reflect(ApplicationMediator.prototype, "childGame.ApplicationMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var GameScreenMediator = (function (_super) {
        __extends(GameScreenMediator, _super);
        function GameScreenMediator(viewComponent) {
            var _this = _super.call(this, GameScreenMediator.NAME, viewComponent) || this;
            _super.prototype.initializeNotifier.call(_this, "ChildApplicationFacade");
            _this.proxy = _this.facade().retrieveProxy(childGame.GameProxy.NAME);
            _this.loadResGroup();
            _this.gameScreen.textGroup.addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.touchBegin, _this);
            _this.gameScreen.textGroup.addEventListener(egret.TouchEvent.TOUCH_END, _this.touchEnd, _this);
            _this.gameScreen.plotSelectList.addEventListener(eui.ItemTapEvent.ITEM_TAP, _this.selectItem, _this);
            _this.gameScreen.nextTest.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.showNext, _this);
            _this.gameScreen.btnTips.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.btnTipsClick, _this);
            _this.gameScreen.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.btnBackClick, _this);
            _this.gameScreen.btnPicture.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.pictClick, _this);
            _this.gameScreen.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initData, _this);
            _this.initData();
            return _this;
        }
        GameScreenMediator.prototype.loadResGroup = function () {
            var chapterResGroup = [0, 34, 69, 133, 184, 223];
            for (var i = 5; i >= 0; i--) {
                if (this.proxy.playerInfo.plotId > chapterResGroup[i]) {
                    try {
                        RES.loadGroup("chapter" + i, 0);
                    }
                    catch (err) {
                        console.log(err);
                    }
                    return;
                }
            }
        };
        Object.defineProperty(GameScreenMediator.prototype, "plotOptions", {
            get: function () {
                if (!this._plotOptions) {
                    this._plotOptions = new Map(Object.entries(RES.getRes("plot-options_json")));
                }
                return this._plotOptions;
            },
            enumerable: true,
            configurable: true
        });
        GameScreenMediator.prototype.initData = function () {
            var _this = this;
            this.gameScreen.bottomGroup.visible = this.gameScreen.plotSelectList.visible = this.gameScreen.textGroup.visible = false;
            this.gameScreen.showMiniGame = this.gameScreen.showTransition = this.showResult = this.isQuestion = false;
            this.gameScreen.question = this.gameScreen.points = "";
            this.gameScreen.scrollGroup.height = 450;
            this.gameScreen.scrollGroup.viewport.scrollV = 0;
            this.textIsOver = true;
            var barH = this.gameScreen.huangAndMubar.getChildByName("huangyanyan");
            var barM = this.gameScreen.huangAndMubar.getChildByName("munai");
            barH.width = this.gameScreen.huangAndMubar.width * this.proxy.pointHunag / 86;
            barM.width = this.gameScreen.huangAndMubar.width * this.proxy.pointMu / 86;
            var plot = this.proxy.getCurrentPlot();
            if (!plot) {
                return;
            }
            // 选择不同对话下一条和不同结局
            this.next = plot.next;
            if (plot.type == childGame.plotType.PlotQuestion) {
                this.gameScreen.showScene = false;
                this.gameScreen.questionGroup.visible = this.isQuestion = this.gameScreen.textGroup.visible = true;
                var question = __assign({}, this.proxy.questions.get(plot.questionId.toString()));
                this.gameScreen.questionRes = question.img;
                this.gameScreen.description = question.description;
                this.gameScreen.question = question.question;
                this.rightText = question.right;
                this.questionPoints = [question.points1, question.points2];
                this.showPointsNum = 0;
                this.gameScreen.scrollGroup.height = 150;
                this.gameScreen.scrollGroup.viewport.scrollH = 0;
                if (question.type == "填空") {
                    this.gameScreen.bottomGroup.visible = true;
                    this.gameScreen.showInput(question.answer);
                }
                else if (question.type == "选择") {
                    this.gameScreen.bottomGroup.visible = true;
                    this.gameScreen.showSelect(question.optionsId);
                }
                else if (question.type == "小游戏") {
                    this.sendNotification(childGame.GameProxy.SHOW_MINIGAME, question.keyword);
                    this.gameScreen.showMiniGame = true;
                }
            }
            else if (plot.type == childGame.plotType.Transition) {
                this.gameScreen.showTransition = true;
                this.gameScreen.transitionText = plot.effect;
                this.loadResGroup();
                egret.setTimeout(function () {
                    _this.showNext();
                }, this, 2000);
            }
            else if (plot.type == "界面切换经营") {
                this.showNext();
            }
            else {
                this.gameScreen.showScene = this.gameScreen.textGroup.visible = true;
                true;
                this.gameScreen.questionGroup.visible = false;
                //搭建剧情场景
                this.settingScene(plot.res, plot.portrait, plot.effect, plot.effectTrigger);
                //剧情文字变化
                if (plot.type != childGame.plotType.PlotAdded) {
                    this.gameScreen.description = "";
                }
                if (plot.description) {
                    this.textIsOver = false;
                    this.wordList = plot.description.split("");
                    this.addWordToDescription();
                }
                //选项
                if (plot.talkId) {
                    this.showPlotOption(plot.talkId);
                }
                //音效
                if (plot.sound) {
                    var timeout = +plot.playTime * 1000;
                    egret.setTimeout(function () {
                        childGame.SoundPool.playSoundEffect(plot.sound);
                    }, this, timeout);
                }
                //自动跳到下一条
                if (plot.autoNextTime) {
                    var timeout = +plot.autoNextTime * 1000;
                    egret.setTimeout(function () {
                        _this.showNext();
                    }, this, timeout);
                }
            }
        };
        GameScreenMediator.prototype.settingScene = function (res, addType, effect, effectTigger) {
            var _this = this;
            var added = this.gameScreen.sceneGroup.getChildByName("added") || this.gameScreen.sceneGroup.parent.getChildByName("added");
            if (!!added) {
                added.parent.removeChild(added);
            }
            egret.Tween.removeAllTweens(); //移除所有动画效果
            this.gameScreen.sceneBg.horizontalCenter = 0;
            this.gameScreen.sceneAddGroup.removeChildren();
            var sceneResList = res.split("、");
            sceneResList.forEach(function (v, i) {
                if (!_this.proxy.playerInfo.collectedScenes.includes(v)) {
                    _this.proxy.playerInfo.collectedScenes.push(v);
                }
                if (!i) {
                    _this.gameScreen.sceneBg.source = v;
                    _this.gameScreen.sceneBg.alpha = 1;
                    if (v == effectTigger) {
                        childGame.EffectManager.playEffect.call(_this.gameScreen.sceneBg, effect);
                    }
                }
                else {
                    var img = new eui.Image();
                    img.source = v;
                    if (!addType) {
                        img.scaleX = img.scaleY = 0.5;
                    }
                    else {
                        img.scaleX = img.scaleY = 1;
                    }
                    img.y = 135;
                    img.x = 180 * (i - 1);
                    _this.gameScreen.sceneAddGroup.addChild(img);
                    if (v == effectTigger) {
                        childGame.EffectManager.playEffect.call(img, effect);
                    }
                }
            });
            if (effectTigger == "all") {
                childGame.EffectManager.playEffect.call(this.gameScreen.sceneGroup, effect);
            }
        };
        GameScreenMediator.prototype.addWordToDescription = function () {
            var _this = this;
            if (!this.wordList.length) {
                this.textIsOver = true;
            }
            else if (this.textIsOver) {
                this.gameScreen.description += this.wordList.join("");
                this.wordList = [];
            }
            else {
                var str = this.wordList.shift();
                this.gameScreen.description = this.gameScreen.description + str;
                egret.setTimeout(function () {
                    _this.addWordToDescription();
                }, this, 100);
            }
            var bottomHeight = this.gameScreen.scrollGroup.viewport.contentHeight - this.gameScreen.scrollGroup.height;
            this.gameScreen.scrollGroup.viewport.scrollV = Math.max(0, bottomHeight);
        };
        GameScreenMediator.prototype.showPlotOption = function (talkId) {
            var _this = this;
            this.gameScreen.plotSelectList.visible = this.isQuestion = true;
            this.gameScreen.scrollGroup.height = 280;
            var plotOption = this.plotOptions.get(talkId.toString());
            if (plotOption) {
                this.gameScreen.question = plotOption.question || "";
                var options = [
                    {
                        option: plotOption.option1,
                        result: plotOption.result1,
                        next: 1
                    },
                    {
                        option: plotOption.option2,
                        result: plotOption.result2,
                        next: 2
                    }
                ];
                this.gameScreen.plotSelectList.dataProvider = new eui.ArrayCollection(options);
                this.gameScreen.plotSelectList.itemRenderer = childGame.QuestionSelectItemRenderer;
            }
            egret.setTimeout(function () {
                var bottomHeight = _this.gameScreen.scrollGroup.viewport.contentHeight - _this.gameScreen.scrollGroup.height;
                _this.gameScreen.scrollGroup.viewport.scrollV = Math.max(0, bottomHeight);
            }, this, 100);
        };
        GameScreenMediator.prototype.selectItem = function () {
            var point = +this.gameScreen.plotSelectList.selectedItem.result;
            this.proxy.pointHunag += point;
            this.proxy.pointMu -= point;
            this.next = this.gameScreen.plotSelectList.selectedItem.next;
            this.showNext();
        };
        GameScreenMediator.prototype.showRightResult = function () {
            var _this = this;
            this.gameScreen.description = this.rightText;
            this.showResult = true;
            egret.setTimeout(function () {
                _this.showNext();
            }, this, 1500);
        };
        GameScreenMediator.prototype.showNext = function () {
            if (!this.textIsOver) {
                this.textIsOver = true;
                return;
            }
            if (this.proxy.playerInfo.fatigueValue <= 0) {
                return;
            }
            this.proxy.playerInfo.fatigueValue -= 1;
            if (!this.next) {
                this.proxy.playerInfo.plotId = this.proxy.playerInfo.plotId + 1;
            }
            else if (this.next == "over") {
                if (this.proxy.pointMu > this.proxy.pointHunag) {
                    this.proxy.playerInfo.plotId = this.proxy.playerInfo.plotId + 2;
                }
                else {
                    this.proxy.playerInfo.plotId = this.proxy.playerInfo.plotId + 1;
                }
            }
            else {
                this.proxy.playerInfo.plotId = this.proxy.playerInfo.plotId + this.next;
            }
            this.initData();
        };
        GameScreenMediator.prototype.btnTipsClick = function () {
            if (!this.showPointsNum) {
                this.gameScreen.points = this.questionPoints[0];
                this.showPointsNum++;
            }
            else if (this.showPointsNum == 1) {
                this.gameScreen.points = this.questionPoints[1];
                this.showPointsNum;
            }
            else {
                this.gameScreen.points = "";
                this.showPointsNum = 0;
            }
        };
        GameScreenMediator.prototype.btnBackClick = function () {
            this.sendNotification(childGame.SceneCommand.CHANGE, childGame.Scene.Start);
        };
        GameScreenMediator.prototype.pictClick = function () {
            this.sendNotification(childGame.SceneCommand.SHOW_SCENE);
        };
        GameScreenMediator.prototype.touchBegin = function (e) {
            // console.log("TOUCH_BEGIN", e.stageX)
            e.stopImmediatePropagation();
            this.beforeX = e.stageX;
            this.beforeY = e.stageY;
            this.touchBeginTime = new Date().getTime();
        };
        GameScreenMediator.prototype.touchEnd = function (e) {
            // console.log("TOUCH_END", e.stageX)
            e.stopImmediatePropagation();
            if (!this.textIsOver) {
                this.textIsOver = true;
                return;
            }
            var touchEndTime = new Date().getTime();
            if (!this.isQuestion && (e.stageX < this.beforeX - 20 && Math.abs(e.stageY - this.beforeY) < 20 || touchEndTime - this.touchBeginTime < 300)) {
                this.showNext();
            }
        };
        GameScreenMediator.prototype.touchReleaseOutside = function (e) {
        };
        GameScreenMediator.prototype.listNotificationInterests = function () {
            return [childGame.GameProxy.PASS_MINIGAME];
        };
        GameScreenMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case childGame.GameProxy.PASS_MINIGAME:
                    this.showRightResult();
                    break;
            }
        };
        Object.defineProperty(GameScreenMediator.prototype, "gameScreen", {
            get: function () {
                return (this.viewComponent);
            },
            enumerable: true,
            configurable: true
        });
        GameScreenMediator.NAME = "GameScreenMediator";
        return GameScreenMediator;
    }(puremvc.Mediator));
    childGame.GameScreenMediator = GameScreenMediator;
    __reflect(GameScreenMediator.prototype, "childGame.GameScreenMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var M14 = (function (_super) {
        __extends(M14, _super);
        function M14() {
            var _this = _super.call(this) || this;
            _this.paperList = [];
            _this.recordList = [];
            _this.answerList = [];
            _this.is_touch_begin = false;
            _this.is_touch_move = false;
            _this.ischang = false;
            _this.is_move_end = true;
            _this.ww = true;
            _this.skinName = "M14Skin";
            return _this;
        }
        M14.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        M14.prototype.childrenCreated = function () {
            var _this = this;
            _super.prototype.childrenCreated.call(this);
            this.paperList = [this.no1, this.no2, this.no3, this.no4, this.no5, this.no6, this.no7, this.no8];
            this.answerList = [
                { x: 450.5, y: 250, ro: 0 },
                { x: 270.5, y: 100, ro: 0 },
                { x: 85.5, y: 100, ro: 0 },
                { x: 450.5, y: 100, ro: 0 },
                { x: 85.5, y: 250, ro: 0 },
                { x: 630.5, y: 250, ro: 0 },
                { x: 630.5, y: 100, ro: 0 },
                { x: 270.5, y: 250, ro: 0 }
            ];
            this.paperList.forEach(function (ele) {
                // ele.addEventListener(egret.TouchEvent.TOUCH_TAP, (() => { this.rotate(ele) }), this);
                ele.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (function () { _this.record(ele); }), _this);
                ele.addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.move, _this);
                ele.addEventListener(egret.TouchEvent.TOUCH_END, _this.transposition, _this);
            });
        };
        M14.prototype.record = function (img) {
            if (this.is_move_end) {
                this.first_img = img;
                this.first_img.parent.addChild(this.first_img);
                this.first_img_x = img.x;
                this.first_img_y = img.y;
                this.is_move_end = false;
                this.is_touch_begin = true;
            }
        };
        M14.prototype.move = function (s) {
            if (this.is_touch_begin) {
                this.first_img.x = s.stageX;
                this.first_img.y = (s.stageY - 90 - 64.5);
                this.is_touch_move = true;
            }
        };
        M14.prototype.transposition = function (s) {
            var _this = this;
            if (this.is_touch_move || this.is_touch_begin) {
                this.is_touch_begin = false;
                this.ischang = false;
                if (this.first_img.x == this.first_img_x && this.first_img.y == this.first_img_y) {
                    this.first_img.rotation = this.first_img.rotation == 0 ? 180 : 0;
                }
                else {
                    this.paperList.forEach(function (ele) {
                        // if ((ele.x - 84.5) <= s.stageX && s.stageX <= (ele.x + 84.5) && (ele.y - 64.5) <= (s.stageY - 180) && (s.stageY - 180) <= (ele.y + 64.5) && ele != this.first_img) {
                        if (Math.abs(_this.first_img.x - ele.x) <= 84.5 && Math.abs(_this.first_img.y - ele.y) <= 64.5 && _this.first_img != ele) {
                            // this.first_img.x = ele.x;
                            // this.first_img.y = ele.y;
                            egret.Tween.get(_this.first_img).to({ x: ele.x, y: ele.y }, 300);
                            // ele.x = this.first_img_x;
                            // ele.y = this.first_img_y;
                            egret.Tween.get(ele).to({ x: _this.first_img_x, y: _this.first_img_y }, 300);
                            _this.ischang = true;
                        }
                    });
                }
                if (!this.ischang) {
                    // this.first_img.x = this.first_img_x;
                    // this.first_img.y = this.first_img_y;
                    egret.Tween.get(this.first_img).to({ x: this.first_img_x, y: this.first_img_y }, 300);
                }
                egret.setTimeout(this.move_end, this, 300);
                this.iswin();
                this.is_touch_move = false;
            }
        };
        M14.prototype.move_end = function () {
            this.is_move_end = true;
        };
        M14.prototype.iswin = function () {
            var _this = this;
            this.ww = true;
            this.paperList.forEach(function (ele) {
                var no = _this.paperList.indexOf(ele);
                if (ele.x != _this.answerList[no].x || ele.y != _this.answerList[no].y || ele.rotation != _this.answerList[no].ro) {
                    _this.ww = false;
                }
            });
            if (this.ww) {
                this.win.parent.addChild(this.win);
                this.win.visible = true;
                childGame.ApplicationFacade.getInstance().sendNotification(childGame.GameProxy.PASS_MINIGAME);
            }
        };
        return M14;
    }(eui.Component));
    childGame.M14 = M14;
    __reflect(M14.prototype, "childGame.M14", ["eui.UIComponent", "egret.DisplayObject"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var M2 = (function (_super) {
        __extends(M2, _super);
        function M2() {
            var _this = _super.call(this) || this;
            _this.allCube = [];
            _this.whiteCube = [];
            _this.rowList = [2, 58, 114, 173, 229, 285, 344, 400, 456];
            _this.columnList = [2, 58, 114, 175, 231, 287, 348, 403, 458];
            _this.skinName = "M2Skin";
            return _this;
        }
        M2.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        M2.prototype.childrenCreated = function () {
            var _this = this;
            _super.prototype.childrenCreated.call(this);
            this.allCube = [
                this.red1, this.red2, this.red3, this.red4, this.red5, this.red6, this.red7, this.red8, this.red9,
                this.blue1, this.blue2, this.blue3, this.blue4, this.blue5, this.blue6, this.blue7, this.blue8, this.blue9,
                this.white1, this.white2, this.white3, this.white4, this.white5, this.white6, this.white7, this.white8, this.white9,
                this.black1, this.black2, this.black3, this.black4, this.black5, this.black6, this.black7, this.black8, this.black9,
                this.yellow1, this.yellow2, this.yellow3, this.yellow4, this.yellow5, this.yellow6, this.yellow7, this.yellow8, this.yellow9
            ];
            this.whiteCube = [this.white1, this.white2, this.white3, this.white4, this.white5, this.white6, this.white7, this.white8, this.white9];
            this.row1_1.addEventListener(egret.TouchEvent.TOUCH_TAP, (function () { _this.moveCube(3, -1, "row"); }), this);
            this.row1_2.addEventListener(egret.TouchEvent.TOUCH_TAP, (function () { _this.moveCube(3, 1, "row"); }), this);
            this.row2_1.addEventListener(egret.TouchEvent.TOUCH_TAP, (function () { _this.moveCube(4, -1, "row"); }), this);
            this.row2_2.addEventListener(egret.TouchEvent.TOUCH_TAP, (function () { _this.moveCube(4, 1, "row"); }), this);
            this.row3_1.addEventListener(egret.TouchEvent.TOUCH_TAP, (function () { _this.moveCube(5, -1, "row"); }), this);
            this.row3_2.addEventListener(egret.TouchEvent.TOUCH_TAP, (function () { _this.moveCube(5, 1, "row"); }), this);
            this.column1_1.addEventListener(egret.TouchEvent.TOUCH_TAP, (function () { _this.moveCube(3, -1, "column"); }), this);
            this.column1_2.addEventListener(egret.TouchEvent.TOUCH_TAP, (function () { _this.moveCube(3, 1, "column"); }), this);
            this.column2_1.addEventListener(egret.TouchEvent.TOUCH_TAP, (function () { _this.moveCube(4, -1, "column"); }), this);
            this.column2_2.addEventListener(egret.TouchEvent.TOUCH_TAP, (function () { _this.moveCube(4, 1, "column"); }), this);
            this.column3_1.addEventListener(egret.TouchEvent.TOUCH_TAP, (function () { _this.moveCube(5, -1, "column"); }), this);
            this.column3_2.addEventListener(egret.TouchEvent.TOUCH_TAP, (function () { _this.moveCube(5, 1, "column"); }), this);
        };
        M2.prototype.moveCube = function (i, n, direction) {
            var _this = this;
            this.allCube.forEach(function (cube) {
                if (cube.y == _this.columnList[i] && direction == "row") {
                    var no = _this.rowList.indexOf(cube.x);
                    no = (no + 9 + n) % 9;
                    cube.x = _this.rowList[no];
                }
                if (cube.x == _this.rowList[i] && direction == "column") {
                    var no2 = _this.columnList.indexOf(cube.y);
                    no2 = (no2 + 9 + n) % 9;
                    cube.y = _this.columnList[no2];
                }
            });
            this.isWin();
        };
        M2.prototype.isWin = function () {
            var _this = this;
            var iwin = true;
            this.whiteCube.forEach(function (cube) {
                if (_this.rowList[6] > cube.x) {
                    iwin = false;
                }
            });
            if (iwin) {
                this.win.visible = true;
                childGame.ApplicationFacade.getInstance().sendNotification(childGame.GameProxy.PASS_MINIGAME);
            }
        };
        return M2;
    }(eui.Component));
    childGame.M2 = M2;
    __reflect(M2.prototype, "childGame.M2", ["eui.UIComponent", "egret.DisplayObject"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var M24 = (function (_super) {
        __extends(M24, _super);
        function M24() {
            var _this = _super.call(this) || this;
            _this.arr1 = [];
            _this.arr2 = [];
            _this.skinName = "M24";
            return _this;
        }
        M24.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        M24.prototype.childrenCreated = function () {
            var _this = this;
            _super.prototype.childrenCreated.call(this);
            this.arr1 = [this.hei, this.bai, this.zhu, this.he];
            this.arr2 = [this.jiao, this.yi, this.ti, this.jia];
            this.arr1.forEach(function (ele) {
                ele.addEventListener(egret.TouchEvent.TOUCH_TAP, (function () { return _this.haha(ele, _this.arr1); }), _this);
            });
            this.arr2.forEach(function (ele) {
                ele.addEventListener(egret.TouchEvent.TOUCH_TAP, (function () { return _this.haha(ele, _this.arr2); }), _this);
            });
        };
        M24.prototype.haha = function (ele, arr) {
            arr.forEach(function (e) {
                e.scaleX = 1;
                e.scaleY = 1;
            });
            ele.scaleX = 0.8;
            ele.scaleY = 0.8;
            this.iswin();
        };
        M24.prototype.iswin = function () {
            if (this.bai.scaleX == 0.8 && this.jiao.scaleX == 0.8) {
                this.win.visible = true;
                childGame.ApplicationFacade.getInstance().sendNotification(childGame.GameProxy.PASS_MINIGAME);
            }
        };
        return M24;
    }(eui.Component));
    childGame.M24 = M24;
    __reflect(M24.prototype, "childGame.M24", ["eui.UIComponent", "egret.DisplayObject"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var M3_2 = (function (_super) {
        __extends(M3_2, _super);
        function M3_2() {
            var _this = _super.call(this) || this;
            _this.timeOnEnterFrame = 0;
            _this.skinName = "M3_2Skin";
            _this.once(egret.Event.ADDED_TO_STAGE, _this.onLoad, _this);
            return _this;
        }
        M3_2.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        M3_2.prototype.childrenCreated = function () {
            var _this = this;
            _super.prototype.childrenCreated.call(this);
            var dataArr = [
                { image: 'word_ren' },
                { image: 'word_xin' },
                { image: 'word_guo' },
                { image: 'word_shi' }
            ];
            var euiArr = new eui.ArrayCollection(dataArr);
            this.wordList1.dataProvider = euiArr;
            this.wordList2.dataProvider = euiArr;
            this.wordList3.dataProvider = euiArr;
            this.wordList4.dataProvider = euiArr;
            this.wordList1.itemRenderer = childGame.wordList;
            this.wordList2.itemRenderer = childGame.wordList;
            this.wordList3.itemRenderer = childGame.wordList;
            this.wordList4.itemRenderer = childGame.wordList;
            this.word1.verticalScrollBar = null;
            this.word2.verticalScrollBar = null;
            this.word3.verticalScrollBar = null;
            this.word4.verticalScrollBar = null;
            this.word1.addEventListener(eui.UIEvent.CHANGE_END, (function () { return _this.stoptouch(_this.word1); }), this);
            this.word2.addEventListener(eui.UIEvent.CHANGE_END, (function () { return _this.stoptouch(_this.word2); }), this);
            this.word3.addEventListener(eui.UIEvent.CHANGE_END, (function () { return _this.stoptouch(_this.word3); }), this);
            this.word4.addEventListener(eui.UIEvent.CHANGE_END, (function () { return _this.stoptouch(_this.word4); }), this);
            this.turnOffLight.addEventListener(egret.TouchEvent.TOUCH_TAP, this.turn, this);
            this.turnOnLight.addEventListener(egret.TouchEvent.TOUCH_TAP, this.turn, this);
            console.log("布局成功");
        };
        M3_2.prototype.stoptouch = function (word) {
            if (-70 < word.viewport.scrollV && word.viewport.scrollV < 70) {
                word.viewport.scrollV = 0;
            }
            else if (70 < word.viewport.scrollV && word.viewport.scrollV < 210) {
                word.viewport.scrollV = 140;
            }
            else if (210 < word.viewport.scrollV && word.viewport.scrollV < 350) {
                word.viewport.scrollV = 280;
            }
            else if (350 < word.viewport.scrollV && word.viewport.scrollV < 490) {
                word.viewport.scrollV = 420;
            }
            this.isWin();
        };
        M3_2.prototype.isWin = function () {
            if (this.word1.viewport.scrollV == 0 && this.word2.viewport.scrollV == 420 && this.word3.viewport.scrollV == 280 && this.word4.viewport.scrollV == 140) {
                this.win.visible = true;
                childGame.ApplicationFacade.getInstance().sendNotification(childGame.GameProxy.PASS_MINIGAME);
            }
        };
        M3_2.prototype.turn = function () {
            this.bright.visible = this.bright.visible ? false : true;
        };
        M3_2.prototype.onLoad = function (event) {
            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        };
        M3_2.prototype.onEnterFrame = function (e) {
            var now = egret.getTimer();
            var time = this.timeOnEnterFrame;
            var pass = now - time;
            this.timeOnEnterFrame = egret.getTimer();
            this.wordLoop(this.word1);
            this.wordLoop(this.word2);
            this.wordLoop(this.word3);
            this.wordLoop(this.word4);
        };
        M3_2.prototype.wordLoop = function (word) {
            if (word.viewport.scrollV < -70) {
                word.viewport.scrollV = 490;
            }
            if (word.viewport.scrollV > 490) {
                word.viewport.scrollV = -70;
            }
        };
        return M3_2;
    }(eui.Component));
    childGame.M3_2 = M3_2;
    __reflect(M3_2.prototype, "childGame.M3_2", ["eui.UIComponent", "egret.DisplayObject"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var M5 = (function (_super) {
        __extends(M5, _super);
        function M5() {
            var _this = _super.call(this) || this;
            _this.moveCube = [];
            _this.allCube = [];
            _this.skinName = "M5Skin";
            return _this;
        }
        M5.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        M5.prototype.childrenCreated = function () {
            var _this = this;
            _super.prototype.childrenCreated.call(this);
            this.moveCube = [this.cube1, this.cube2, this.cube3, this.cube4, this.cube5, this.cube6, this.cube7, this.cube8, this.cube9, this.cube10, this.cube11];
            this.allCube = [this.cube1, this.cube2, this.cube3, this.cube4, this.cube5, this.cube6, this.cube7, this.cube8, this.cube9, this.cube10, this.cube11, this.Start, this.End];
            this.moveCube.forEach(function (cube) {
                cube.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (function (e) { _this.touchBegin(cube, e); }), _this);
                cube.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, _this.touchEnd, _this);
            });
        };
        M5.prototype.touchBegin = function (cube, e) {
            this.nowCube = cube;
            this.touchPointBegin_x = e.stageX;
            this.touchPointBegin_y = e.stageY;
        };
        M5.prototype.touchEnd = function (e) {
            var _this = this;
            this.X = e.stageX - this.touchPointBegin_x;
            this.Y = e.stageY - this.touchPointBegin_y;
            if (Math.abs(this.X) > Math.abs(this.Y)) {
                if (this.X > 0) {
                    var canmove = this.allCube.some(function (cube) { return (cube.x == (_this.nowCube.x + 120) && cube.y == _this.nowCube.y); });
                    if (this.nowCube.x != 360 && !canmove) {
                        this.nowCube.x += 120;
                    }
                }
                else {
                    var canmove = this.allCube.some(function (cube) { return (cube.x == (_this.nowCube.x - 120) && cube.y == _this.nowCube.y); });
                    if (this.nowCube.x != 0 && !canmove) {
                        this.nowCube.x -= 120;
                    }
                }
            }
            else if (Math.abs(this.X) < Math.abs(this.Y)) {
                if (this.Y > 0) {
                    var canmove = this.allCube.some(function (cube) { return (cube.y == (_this.nowCube.y + 120) && cube.x == _this.nowCube.x); });
                    if (this.nowCube.y != 360 && !canmove) {
                        this.nowCube.y += 120;
                    }
                }
                else {
                    var canmove = this.allCube.some(function (cube) { return (cube.y == (_this.nowCube.y - 120) && cube.x == _this.nowCube.x); });
                    if (this.nowCube.y != 0 && !canmove) {
                        this.nowCube.y -= 120;
                    }
                }
            }
            this.isWin();
        };
        M5.prototype.isWin = function () {
            if (this.cube7.x == 0 && this.cube7.y == 120 && this.cube3.x == 120 && this.cube3.y == 240 && this.cube2.x == 240 && this.cube2.y == 240 && this.cube10.x == 360 && this.cube10.y == 240) {
                if (this.cube8.x == 120 && this.cube8.y == 120 && this.cube9.x == 360 && this.cube9.y == 120) {
                    this.win.visible = true;
                    childGame.ApplicationFacade.getInstance().sendNotification(childGame.GameProxy.PASS_MINIGAME);
                }
                else if (this.cube9.x == 120 && this.cube9.y == 120 && this.cube8.x == 360 && this.cube8.y == 120) {
                    this.win.visible = true;
                    childGame.ApplicationFacade.getInstance().sendNotification(childGame.GameProxy.PASS_MINIGAME);
                }
            }
        };
        return M5;
    }(eui.Component));
    childGame.M5 = M5;
    __reflect(M5.prototype, "childGame.M5", ["eui.UIComponent", "egret.DisplayObject"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var M6 = (function (_super) {
        __extends(M6, _super);
        function M6() {
            var _this = _super.call(this) || this;
            _this.allButton = [];
            _this.password = "0";
            _this.skinName = "M6Skin";
            return _this;
        }
        M6.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        M6.prototype.childrenCreated = function () {
            var _this = this;
            _super.prototype.childrenCreated.call(this);
            this.allButton = [this.button1, this.button2, this.button3, this.button4, this.button5];
            this.button1.addEventListener(egret.TouchEvent.TOUCH_TAP, (function () { _this.key(_this.button1, "1"); }), this);
            this.button2.addEventListener(egret.TouchEvent.TOUCH_TAP, (function () { _this.key(_this.button2, "2"); }), this);
            this.button3.addEventListener(egret.TouchEvent.TOUCH_TAP, (function () { _this.key(_this.button3, "3"); }), this);
            this.button4.addEventListener(egret.TouchEvent.TOUCH_TAP, (function () { _this.key(_this.button4, "4"); }), this);
            this.button5.addEventListener(egret.TouchEvent.TOUCH_TAP, (function () { _this.key(_this.button5, "5"); }), this);
        };
        M6.prototype.key = function (but, i) {
            but.enabled = false;
            but.scaleX = 0.8;
            but.scaleY = 0.8;
            this.password += i;
            if (this.password.length == 5) {
                if (this.password == "05421") {
                    this.win.visible = true;
                    childGame.ApplicationFacade.getInstance().sendNotification(childGame.GameProxy.PASS_MINIGAME);
                }
                else {
                    this.lose.visible = true;
                    this.again.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tryAgain, this);
                }
            }
        };
        M6.prototype.tryAgain = function () {
            this.lose.visible = false;
            this.password = "0";
            this.allButton.forEach(function (but) {
                but.enabled = true;
                but.scaleX = 1;
                but.scaleY = 1;
            });
        };
        return M6;
    }(eui.Component));
    childGame.M6 = M6;
    __reflect(M6.prototype, "childGame.M6", ["eui.UIComponent", "egret.DisplayObject"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var M9 = (function (_super) {
        __extends(M9, _super);
        function M9() {
            var _this = _super.call(this) || this;
            _this.heng = [];
            _this.shu = [];
            _this.zhangai = [];
            _this.skinName = "M9";
            return _this;
        }
        M9.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        M9.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.heng = [119, 163, 207, 251, 295, 339, 383, 427, 471, 515, 559, 603];
            this.shu = [81, 125, 169, 213, 257, 301, 345, 389, 433, 477];
            this.zhangai = [
                { x: 163, y: 169 },
                { x: 603, y: 169 },
                { x: 339, y: 213 },
                { x: 515, y: 213 },
                { x: 119, y: 257 },
                { x: 163, y: 301 },
                { x: 559, y: 345 },
                { x: 119, y: 389 },
                { x: 471, y: 389 },
                { x: 207, y: 477 }
            ];
            this.bg.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.start, this);
            this.bg.addEventListener(egret.TouchEvent.TOUCH_END, this.end, this);
        };
        M9.prototype.start = function (e) {
            this.start_x = e.stageX;
            this.start_y = e.stageY;
        };
        M9.prototype.end = function (e) {
            var xx = Math.abs(e.stageX - this.start_x);
            var yy = Math.abs(e.stageY - this.start_y);
            if (xx > yy) {
                if ((e.stageX - this.start_x) > 0) {
                    //右
                    this.you();
                }
                else {
                    //左
                    this.zuo();
                }
            }
            else {
                if ((e.stageY - this.start_y) > 0) {
                    //下
                    this.xia();
                }
                else {
                    //上
                    this.shang();
                }
            }
        };
        M9.prototype.you = function () {
            var _this = this;
            if (this.ren.x != 603) {
                this.ren.x += 44;
                this.iswin();
                var can_move_1 = true;
                this.zhangai.forEach(function (ele) {
                    if (ele.x == _this.ren.x && ele.y == _this.ren.y) {
                        _this.ren.x -= 44;
                        can_move_1 = false;
                    }
                });
                if (can_move_1) {
                    this.you();
                }
            }
        };
        M9.prototype.zuo = function () {
            var _this = this;
            if (this.ren.x != 119) {
                this.ren.x -= 44;
                this.iswin();
                var can_move_2 = true;
                this.zhangai.forEach(function (ele) {
                    if (ele.x == _this.ren.x && ele.y == _this.ren.y) {
                        _this.ren.x += 44;
                        can_move_2 = false;
                    }
                });
                if (can_move_2) {
                    this.zuo();
                }
            }
        };
        M9.prototype.xia = function () {
            var _this = this;
            if (this.ren.y != 477) {
                this.ren.y += 44;
                this.iswin();
                var can_move_3 = true;
                this.zhangai.forEach(function (ele) {
                    if (ele.x == _this.ren.x && ele.y == _this.ren.y) {
                        _this.ren.y -= 44;
                        can_move_3 = false;
                    }
                });
                if (can_move_3) {
                    this.xia();
                }
            }
        };
        M9.prototype.shang = function () {
            var _this = this;
            if (this.ren.y != 81) {
                this.ren.y -= 44;
                this.iswin();
                var can_move_4 = true;
                this.zhangai.forEach(function (ele) {
                    if (ele.x == _this.ren.x && ele.y == _this.ren.y) {
                        _this.ren.y += 44;
                        can_move_4 = false;
                    }
                });
                if (can_move_4) {
                    this.shang();
                }
            }
        };
        M9.prototype.iswin = function () {
            if (this.ren.x == 515 && this.ren.y == 257) {
                this.ren.visible = false;
                childGame.ApplicationFacade.getInstance().sendNotification(childGame.GameProxy.PASS_MINIGAME);
            }
        };
        return M9;
    }(eui.Component));
    childGame.M9 = M9;
    __reflect(M9.prototype, "childGame.M9", ["eui.UIComponent", "egret.DisplayObject"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var MiniGameCubeStopMediator = (function (_super) {
        __extends(MiniGameCubeStopMediator, _super);
        function MiniGameCubeStopMediator(viewComponent) {
            var _this = _super.call(this, MiniGameCubeStopMediator.NAME, viewComponent) || this;
            _this.selectedList = [];
            _super.prototype.initializeNotifier.call(_this, "ChildApplicationFacade");
            _this.cubeStop.buttonList.addEventListener(eui.ItemTapEvent.ITEM_TAP, _this.selectItem, _this);
            _this.cubeStop.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initData, _this);
            return _this;
        }
        MiniGameCubeStopMediator.prototype.initData = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.dataList = [
                        { name: "一", img: "m20_1", isSelected: false },
                        { name: "一", img: "m20_2", isSelected: false },
                        { name: "一", img: "m20_3", isSelected: false },
                        { name: "一", img: "m20_4", isSelected: false },
                        { name: "一", img: "m20_5", isSelected: false },
                        { name: "一", img: "m20_6", isSelected: false },
                        { name: "一", img: "m20_7", isSelected: false },
                        { name: "一", img: "m20_8", isSelected: false },
                        { name: "一", img: "m20_9", isSelected: false }
                    ];
                    this.cubeStop.buttonList.dataProvider = new eui.ArrayCollection(this.dataList);
                    this.cubeStop.buttonList.itemRenderer = childGame.CubeStopItemRenderer;
                    return [2 /*return*/];
                });
            });
        };
        MiniGameCubeStopMediator.prototype.selectItem = function () {
            console.log(this.cubeStop.buttonList.selectedItem);
            var selectedItem = this.cubeStop.buttonList.selectedItem;
            var selected = this.dataList.find(function (i) { return i.img == selectedItem.img; });
            var selectedIndex = this.dataList.findIndex(function (i) { return i.img == selectedItem.img; });
            selected.isSelected = !selected.isSelected;
            if (selectedIndex + 3 < 9) {
                this.dataList[selectedIndex + 3].isSelected = !this.dataList[selectedIndex + 3].isSelected;
            }
            if (selectedIndex - 3 >= 0) {
                this.dataList[selectedIndex - 3].isSelected = !this.dataList[selectedIndex - 3].isSelected;
            }
            if (selectedIndex % 3 != 2) {
                this.dataList[selectedIndex + 1].isSelected = !this.dataList[selectedIndex + 1].isSelected;
            }
            if (selectedIndex % 3 != 0) {
                this.dataList[selectedIndex - 1].isSelected = !this.dataList[selectedIndex - 1].isSelected;
            }
            if (!this.dataList.find(function (i) { return !i.isSelected; })) {
                this.cubeStop.buttonList.touchEnabled = false;
                this.cubeStop.buttonList.touchChildren = false;
                this.sendNotification(childGame.GameProxy.PASS_MINIGAME);
            }
            this.cubeStop.buttonList.dataProvider = new eui.ArrayCollection(this.dataList);
            this.cubeStop.buttonList.itemRenderer = childGame.CubeStopItemRenderer;
        };
        Object.defineProperty(MiniGameCubeStopMediator.prototype, "cubeStop", {
            get: function () {
                return (this.viewComponent);
            },
            enumerable: true,
            configurable: true
        });
        MiniGameCubeStopMediator.NAME = "MiniGameCubeStopMediator";
        return MiniGameCubeStopMediator;
    }(puremvc.Mediator));
    childGame.MiniGameCubeStopMediator = MiniGameCubeStopMediator;
    __reflect(MiniGameCubeStopMediator.prototype, "childGame.MiniGameCubeStopMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var ApplicationFacade = (function (_super) {
        __extends(ApplicationFacade, _super);
        function ApplicationFacade() {
            return _super.call(this, "ChildApplicationFacade") || this;
        }
        ApplicationFacade.getInstance = function () {
            if (this.instance == null)
                this.instance = new ApplicationFacade();
            return (this.instance);
        };
        ApplicationFacade.prototype.initializeController = function () {
            _super.prototype.initializeController.call(this);
            this.registerCommand(ApplicationFacade.STARTUP, childGame.StartupCommand);
        };
        /**
         * 启动PureMVC，在应用程序中调用此方法，并传递应用程序本身的引用
         * @param	rootView	-	PureMVC应用程序的根视图root，包含其它所有的View Componet
         */
        ApplicationFacade.prototype.startUp = function (rootView) {
            this.sendNotification(ApplicationFacade.STARTUP, rootView);
            this.removeCommand(ApplicationFacade.STARTUP); //PureMVC初始化完成，注销STARUP命令
            this.sendNotification(childGame.SceneCommand.CHANGE, childGame.Scene.Start);
        };
        ApplicationFacade.prototype.registerMediator = function (mediator) {
            _super.prototype.registerMediator.call(this, mediator);
            // super.initializeNotifier(mediator.getMediatorName());
        };
        ApplicationFacade.STARTUP = "startup";
        return ApplicationFacade;
    }(puremvc.Facade));
    childGame.ApplicationFacade = ApplicationFacade;
    __reflect(ApplicationFacade.prototype, "childGame.ApplicationFacade", ["puremvc.IFacade", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var MiniGameInputMediator = (function (_super) {
        __extends(MiniGameInputMediator, _super);
        function MiniGameInputMediator(viewComponent) {
            var _this = _super.call(this, MiniGameInputMediator.NAME, viewComponent) || this;
            _this.isSend = false;
            _super.prototype.initializeNotifier.call(_this, "ChildApplicationFacade");
            _this.gameInput.answerInput.addEventListener(egret.FocusEvent.FOCUS_OUT, _this.focusOut, _this);
            _this.gameInput.btnConfirm.addEventListener(egret.Event.CHANGE, _this.confirmClick, _this);
            _this.gameInput.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initData, _this);
            _this.initData();
            return _this;
        }
        MiniGameInputMediator.prototype.initData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var i, tLayout;
                return __generator(this, function (_a) {
                    this.gameInput.answerInput.textDisplay.size = 45;
                    this.gameInput.answerInput.text = null;
                    this.isSend = false;
                    this.inputTextList = [];
                    for (i = 0; i < this.gameInput.answer.length; i++) {
                        this.inputTextList.push("");
                    }
                    tLayout = new eui.TileLayout();
                    tLayout.horizontalGap = 20;
                    tLayout.verticalGap = 20;
                    tLayout.orientation = "columns";
                    tLayout.requestedColumnCount = this.gameInput.answer.length < 7 ? this.gameInput.answer.length : 4;
                    this.gameInput.inputItemList.layout = tLayout;
                    this.gameInput.inputItemList.dataProvider = new eui.ArrayCollection(this.inputTextList);
                    this.gameInput.inputItemList.itemRenderer = childGame.InputItemRenderer;
                    return [2 /*return*/];
                });
            });
        };
        MiniGameInputMediator.prototype.focusOut = function (e) {
            var _this = this;
            if (e.target.text.length > this.inputTextList.length) {
                e.target.text = e.target.text.substr(0, this.inputTextList.length);
            }
            this.inputTextList = this.inputTextList.map(function (i) { return ""; });
            e.target.text.split("").forEach(function (v, i) {
                if (i < _this.inputTextList.length) {
                    _this.inputTextList[i] = v;
                }
            });
            if (e.target.text == this.gameInput.answer && !this.isSend) {
                e.target.text = "";
                this.sendNotification(childGame.GameProxy.PASS_MINIGAME);
                this.isSend = true;
            }
            this.gameInput.inputItemList.dataProvider = new eui.ArrayCollection(this.inputTextList);
            this.gameInput.inputItemList.itemRenderer = childGame.InputItemRenderer;
        };
        MiniGameInputMediator.prototype.confirmClick = function () {
            var text = this.inputTextList.join("");
            if (text == this.gameInput.answer && !this.isSend) {
                this.sendNotification(childGame.GameProxy.PASS_MINIGAME);
                this.isSend = true;
            }
        };
        Object.defineProperty(MiniGameInputMediator.prototype, "gameInput", {
            get: function () {
                return (this.viewComponent);
            },
            enumerable: true,
            configurable: true
        });
        MiniGameInputMediator.NAME = "MiniGameInputMediator";
        return MiniGameInputMediator;
    }(puremvc.Mediator));
    childGame.MiniGameInputMediator = MiniGameInputMediator;
    __reflect(MiniGameInputMediator.prototype, "childGame.MiniGameInputMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var MiniGameJigsawM08Mediator = (function (_super) {
        __extends(MiniGameJigsawM08Mediator, _super);
        function MiniGameJigsawM08Mediator(viewComponent) {
            var _this = _super.call(this, MiniGameJigsawM08Mediator.NAME, viewComponent) || this;
            _super.prototype.initializeNotifier.call(_this, "ChildApplicationFacade");
            _this.jigsawImgGroupList = [
                _this.gameJigsaw.jigsawImgGroup1, _this.gameJigsaw.jigsawImgGroup2, _this.gameJigsaw.jigsawImgGroup3,
                _this.gameJigsaw.jigsawImgGroup4, _this.gameJigsaw.jigsawImgGroup5, _this.gameJigsaw.jigsawImgGroup6,
                _this.gameJigsaw.jigsawImgGroup7, _this.gameJigsaw.jigsawImgGroup8, _this.gameJigsaw.jigsawImgGroup9
            ];
            _this.jigsawImgGroupList.forEach(function (i, index) {
                i.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                    e.stopImmediatePropagation();
                    _this.jigsawImgclick(index);
                }, _this);
            });
            _this.gameJigsaw.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initData, _this);
            return _this;
        }
        MiniGameJigsawM08Mediator.prototype.initData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                var imgList;
                return __generator(this, function (_a) {
                    imgList = ["m08_2", "m08_5", "m08_8", "m08_4", "", "m08_7", "m08_1", "m08_3", "m08_6"];
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
                    this.jigsawImgGroupList.forEach(function (i, index) {
                        var jigsawImg = i.getChildByName("jigsawImg");
                        jigsawImg.source = imgList[index];
                        if (!imgList[index]) {
                            _this.emptyIndex = index;
                        }
                    });
                    return [2 /*return*/];
                });
            });
        };
        MiniGameJigsawM08Mediator.prototype.jigsawImgclick = function (index) {
            if (this.emptyIndex == index + 1 || this.emptyIndex == index - 1
                || this.emptyIndex == index + 3 || this.emptyIndex == index - 3) {
                var clickImg = this.jigsawImgGroupList[index].getChildByName("jigsawImg");
                var emptyImg = this.jigsawImgGroupList[this.emptyIndex].getChildByName("jigsawImg");
                this.jigsawImgGroupList[index].addChild(emptyImg);
                this.jigsawImgGroupList[this.emptyIndex].addChild(clickImg);
                this.emptyIndex = index;
                this.setResult();
            }
        };
        MiniGameJigsawM08Mediator.prototype.setResult = function () {
            var isSuccess = true;
            var imgList = ["m08_1", "", "m08_2", "m08_3", "m08_4", "m08_5", "m08_6", "m08_7", "m08_8"];
            this.jigsawImgGroupList.forEach(function (i, index) {
                var jigsawImg = i.getChildByName("jigsawImg");
                if (jigsawImg.source != imgList[index]) {
                    isSuccess = false;
                }
            });
            if (isSuccess) {
                this.sendNotification(childGame.GameProxy.PASS_MINIGAME);
            }
        };
        Object.defineProperty(MiniGameJigsawM08Mediator.prototype, "gameJigsaw", {
            get: function () {
                return (this.viewComponent);
            },
            enumerable: true,
            configurable: true
        });
        MiniGameJigsawM08Mediator.NAME = "MiniGameJigsawM08Mediator";
        return MiniGameJigsawM08Mediator;
    }(puremvc.Mediator));
    childGame.MiniGameJigsawM08Mediator = MiniGameJigsawM08Mediator;
    __reflect(MiniGameJigsawM08Mediator.prototype, "childGame.MiniGameJigsawM08Mediator", ["puremvc.IMediator", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var MiniGameJigsawM16Mediator = (function (_super) {
        __extends(MiniGameJigsawM16Mediator, _super);
        function MiniGameJigsawM16Mediator(viewComponent) {
            var _this = _super.call(this, MiniGameJigsawM16Mediator.NAME, viewComponent) || this;
            _super.prototype.initializeNotifier.call(_this, "ChildApplicationFacade");
            _this.jigsawImgGroupList = [
                _this.gameJigsaw.jigsawImgGroup1, _this.gameJigsaw.jigsawImgGroup2,
                _this.gameJigsaw.jigsawImgGroup3, _this.gameJigsaw.jigsawImgGroup4
            ];
            _this.jigsawImgGroupList.forEach(function (i) {
                i.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                    e.stopImmediatePropagation();
                    var isShow = !i.getChildByName("jigsawMove").visible;
                    i.getChildByName("border").visible = i.getChildByName("jigsawMove").visible
                        = i.getChildByName("jigsawTrans").visible = isShow;
                    _this.jigsawImgGroupList.forEach(function (item, index) {
                        if (item != e.currentTarget) {
                            item.getChildByName("border").visible = item.getChildByName("jigsawMove").visible
                                = item.getChildByName("jigsawTrans").visible = false;
                        }
                    });
                }, _this);
                i.getChildByName("jigsawTrans").addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
                    e.stopImmediatePropagation();
                    i.getChildByName("border").visible = i.getChildByName("jigsawMove").visible
                        = i.getChildByName("jigsawTrans").visible = false;
                    var jigsawImg = i.getChildByName("jigsawImg");
                    jigsawImg.rotation = !jigsawImg.rotation ? 180 : 0;
                    _this.setResult();
                }, _this);
                i.getChildByName("jigsawMove").addEventListener(egret.TouchEvent.TOUCH_BEGIN, _this.touchBegin, _this);
                i.getChildByName("jigsawMove").addEventListener(egret.TouchEvent.TOUCH_MOVE, _this.onMove, _this);
                i.getChildByName("jigsawMove").addEventListener(egret.TouchEvent.TOUCH_CANCEL, _this.touchReleaseOutside, _this);
                i.getChildByName("jigsawMove").addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, _this.touchReleaseOutside, _this);
            });
            _this.gameJigsaw.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initData, _this);
            _this.initData();
            return _this;
        }
        MiniGameJigsawM16Mediator.prototype.initData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var imgList, i, index1, index2, temp;
                return __generator(this, function (_a) {
                    imgList = ["m16_1", "m16_2", "m16_3", "m16_4"];
                    for (i = 0; i < 4; i++) {
                        index1 = Math.floor(Math.random() * 4);
                        index2 = Math.floor(Math.random() * 4);
                        if (index1 != index2) {
                            temp = imgList[index1];
                            imgList[index1] = imgList[index2];
                            imgList[index2] = temp;
                        }
                    }
                    this.jigsawImgGroupList.forEach(function (i, index) {
                        var jigsawImg = i.getChildByName("jigsawImg");
                        jigsawImg.source = imgList[index];
                        jigsawImg.rotation = Math.random() > 0.5 ? 180 : 0;
                    });
                    return [2 /*return*/];
                });
            });
        };
        MiniGameJigsawM16Mediator.prototype.onMove = function (e) {
            e.stopImmediatePropagation();
            //通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
            this.draggedObject.x = e.stageX - this.offsetX;
            this.draggedObject.y = e.stageY - this.offsetY;
        };
        MiniGameJigsawM16Mediator.prototype.touchBegin = function (e) {
            console.log("TOUCH_BEGIN", e.currentTarget.name);
            e.stopImmediatePropagation();
            this.draggedObject = e.currentTarget.parent;
            //把触摸的对象放在显示列表的顶层
            this.draggedObject.parent.addChild(this.draggedObject);
            this.beforeX = this.draggedObject.x;
            this.beforeY = this.draggedObject.y;
            //计算手指和要拖动的对象的距离
            this.offsetX = e.stageX - this.draggedObject.x;
            this.offsetY = e.stageY - this.draggedObject.y;
            //添加 TOUCH_End 方法
            e.currentTarget.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        };
        MiniGameJigsawM16Mediator.prototype.touchEnd = function (e) {
            var _this = this;
            console.log("TOUCH_END", e.currentTarget.name);
            e.stopImmediatePropagation();
            if (!this.draggedObject || e.currentTarget.parent != this.draggedObject) {
                return;
            }
            this.jigsawImgGroupList.forEach(function (item, index) {
                if (_this.draggedObject != item) {
                    var x = Math.abs(_this.draggedObject.x - item.x), y = Math.abs(_this.draggedObject.y - item.y);
                    if (y < 70 && x < 70) {
                        var temp1 = _this.draggedObject.getChildByName("jigsawImg");
                        var temp2 = item.getChildByName("jigsawImg");
                        _this.draggedObject.addChildAt(temp2, 0);
                        item.addChildAt(temp1, 0);
                        _this.setResult();
                    }
                }
            });
            this.draggedObject.x = this.beforeX;
            this.draggedObject.y = this.beforeY;
        };
        MiniGameJigsawM16Mediator.prototype.touchReleaseOutside = function (e) {
            if (this.draggedObject) {
                this.draggedObject.x = this.beforeX;
                this.draggedObject.y = this.beforeY;
                this.draggedObject = null;
            }
        };
        MiniGameJigsawM16Mediator.prototype.setResult = function () {
            var isSuccess = true;
            var imgList = ["m16_1", "m16_2", "m16_3", "m16_4"];
            this.jigsawImgGroupList.forEach(function (i, index) {
                var jigsawImg = i.getChildByName("jigsawImg");
                if (jigsawImg.source != imgList[index] || jigsawImg.rotation != 0) {
                    isSuccess = false;
                }
            });
            if (isSuccess) {
                this.gameJigsaw.touchEnabled = false;
                this.gameJigsaw.touchChildren = false;
                this.sendNotification(childGame.GameProxy.PASS_MINIGAME);
            }
        };
        Object.defineProperty(MiniGameJigsawM16Mediator.prototype, "gameJigsaw", {
            get: function () {
                return (this.viewComponent);
            },
            enumerable: true,
            configurable: true
        });
        MiniGameJigsawM16Mediator.NAME = "MiniGameJigsawM16Mediator";
        return MiniGameJigsawM16Mediator;
    }(puremvc.Mediator));
    childGame.MiniGameJigsawM16Mediator = MiniGameJigsawM16Mediator;
    __reflect(MiniGameJigsawM16Mediator.prototype, "childGame.MiniGameJigsawM16Mediator", ["puremvc.IMediator", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var MiniGameM42Mediator = (function (_super) {
        __extends(MiniGameM42Mediator, _super);
        function MiniGameM42Mediator(viewComponent) {
            var _this = _super.call(this, MiniGameM42Mediator.NAME, viewComponent) || this;
            _super.prototype.initializeNotifier.call(_this, "ChildApplicationFacade");
            var colorMatrix = [
                1, 0, 0, 0, 100,
                0, 1, 0, 0, 100,
                0, 0, 1, 0, 100,
                0, 0, 0, 1, 0
            ];
            _this._colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            _this.miniGame.btnLeft.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.leftClick, _this);
            _this.miniGame.btnRight.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.rightClick, _this);
            _this.miniGame.btnConfirm.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.confirmClick, _this);
            _this.miniGame.btnReset.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.initData, _this);
            _this.miniGame.btnED.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.btnEDClick, _this);
            _this.miniGame.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.btnBackClick, _this);
            _this.miniGame.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initData, _this);
            _this.initData();
            return _this;
        }
        MiniGameM42Mediator.prototype.initData = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _this = this;
                var initRotation, jigsaw, jigsawResult;
                return __generator(this, function (_a) {
                    this.jigsawNameList = ["jigsaw01", "jigsaw02", "jigsaw03", "jigsaw04", "jigsaw05"];
                    this.nowIndex = 0;
                    initRotation = [0, -45, -90, 45, 90];
                    this.jigsawNameList.forEach(function (i, index) {
                        var jigsaw = _this.miniGame.jigsawGroup.getChildByName(i);
                        jigsaw.rotation = initRotation[index];
                        var jigsawResult = _this.miniGame.jigsawResult.getChildByName(i);
                        jigsawResult.visible = false;
                        jigsaw.filters = [];
                        jigsawResult.filters = [];
                    });
                    jigsaw = this.miniGame.jigsawGroup.getChildByName(this.jigsawNameList[this.nowIndex]);
                    jigsawResult = this.miniGame.jigsawResult.getChildByName(this.jigsawNameList[this.nowIndex]);
                    if (!jigsawResult.visible) {
                        jigsawResult.visible = true;
                    }
                    jigsawResult.rotation = jigsaw.rotation;
                    jigsaw.filters = [this._colorFlilter];
                    jigsawResult.filters = [this._colorFlilter];
                    return [2 /*return*/];
                });
            });
        };
        MiniGameM42Mediator.prototype.leftClick = function () {
            var _this = this;
            this.jigsawNameList.forEach(function (i) {
                var jigsaw = _this.miniGame.jigsawGroup.getChildByName(i);
                jigsaw.rotation = jigsaw.rotation + 45 > 180 ? jigsaw.rotation - 315 : jigsaw.rotation + 45;
            });
            if (this.jigsawNameList[this.nowIndex]) {
                var jigsaw = this.miniGame.jigsawGroup.getChildByName(this.jigsawNameList[this.nowIndex]);
                var jigsawResult = this.miniGame.jigsawResult.getChildByName(this.jigsawNameList[this.nowIndex]);
                jigsawResult.rotation = jigsaw.rotation;
            }
        };
        MiniGameM42Mediator.prototype.rightClick = function () {
            var _this = this;
            this.jigsawNameList.forEach(function (i) {
                var jigsaw = _this.miniGame.jigsawGroup.getChildByName(i);
                jigsaw.rotation = jigsaw.rotation - 45 <= -180 ? jigsaw.rotation + 315 : jigsaw.rotation - 45;
            });
            if (this.jigsawNameList[this.nowIndex]) {
                var jigsaw = this.miniGame.jigsawGroup.getChildByName(this.jigsawNameList[this.nowIndex]);
                var jigsawResult = this.miniGame.jigsawResult.getChildByName(this.jigsawNameList[this.nowIndex]);
                jigsawResult.rotation = jigsaw.rotation;
            }
        };
        MiniGameM42Mediator.prototype.confirmClick = function () {
            if (this.jigsawNameList[this.nowIndex]) {
                var jigsaw = this.miniGame.jigsawGroup.getChildByName(this.jigsawNameList[this.nowIndex]);
                var jigsawResult = this.miniGame.jigsawResult.getChildByName(this.jigsawNameList[this.nowIndex]);
                jigsaw.filters = [];
                jigsawResult.filters = [];
            }
            this.nowIndex++;
            if (this.jigsawNameList[this.nowIndex]) {
                var jigsaw = this.miniGame.jigsawGroup.getChildByName(this.jigsawNameList[this.nowIndex]);
                var jigsawResult = this.miniGame.jigsawResult.getChildByName(this.jigsawNameList[this.nowIndex]);
                if (!jigsawResult.visible) {
                    jigsawResult.visible = true;
                }
                jigsawResult.rotation = jigsaw.rotation;
                jigsaw.filters = [this._colorFlilter];
                jigsawResult.filters = [this._colorFlilter];
            }
            if (this.nowIndex == 5) {
                this.setResult();
            }
        };
        MiniGameM42Mediator.prototype.setResult = function () {
            var _this = this;
            var isSuccess = true;
            var resultRotation = [-90, 45, -135, 180, -45];
            this.jigsawNameList.forEach(function (i, index) {
                var jigsawResult = _this.miniGame.jigsawResult.getChildByName(i);
                if (jigsawResult.rotation != resultRotation[index]) {
                    isSuccess = false;
                }
            });
            console.log(isSuccess);
            if (isSuccess) {
                this.miniGame.touchEnabled = false;
                this.miniGame.touchChildren = false;
                this.sendNotification(childGame.GameProxy.PASS_MINIGAME);
            }
        };
        MiniGameM42Mediator.prototype.btnEDClick = function () {
            this.miniGame.showTipsImg = this.miniGame.btnBack.visible = true;
            this.miniGame.btnGroup.visible = this.miniGame.jigsawGroup.visible = false;
        };
        MiniGameM42Mediator.prototype.btnBackClick = function () {
            this.miniGame.showTipsImg = this.miniGame.btnBack.visible = false;
            this.miniGame.btnGroup.visible = this.miniGame.jigsawGroup.visible = true;
        };
        Object.defineProperty(MiniGameM42Mediator.prototype, "miniGame", {
            get: function () {
                return (this.viewComponent);
            },
            enumerable: true,
            configurable: true
        });
        MiniGameM42Mediator.NAME = "MiniGameM42Mediator";
        return MiniGameM42Mediator;
    }(puremvc.Mediator));
    childGame.MiniGameM42Mediator = MiniGameM42Mediator;
    __reflect(MiniGameM42Mediator.prototype, "childGame.MiniGameM42Mediator", ["puremvc.IMediator", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var MiniGameMediator = (function (_super) {
        __extends(MiniGameMediator, _super);
        function MiniGameMediator(viewComponent) {
            var _this = _super.call(this, MiniGameMediator.NAME, viewComponent) || this;
            _super.prototype.initializeNotifier.call(_this, "ChildApplicationFacade");
            _this.proxy = _this.facade().retrieveProxy(childGame.GameProxy.NAME);
            _this.initData();
            return _this;
        }
        MiniGameMediator.prototype.initData = function () {
            // if (this.gameName) {
            //     this.miniGame.addMiniGame(this.gameName);
            // }
            this.miniGame.clearStage();
            var displayObject = this.getGameDisplayObject(this.gameName);
            displayObject && this.miniGame.addMiniGameObject(displayObject);
        };
        MiniGameMediator.prototype.getGameDisplayObject = function (gameName) {
            var displayObject = null;
            if (this.gameName == childGame.gameKey.FloorSwitch) {
                displayObject = new childGame.MiniGameFloorSwitch();
            }
            else if (this.gameName == childGame.gameKey.CubeStop) {
                displayObject = new childGame.MiniGameCubeStop();
            }
            else if (this.gameName == "迷宫") {
                displayObject = new childGame.MiniGameJigsawM16();
            }
            else if (this.gameName == "古董组合") {
                displayObject = new childGame.MiniGameJigsawM08();
            }
            else if (this.gameName == "拼装分水镜") {
                displayObject = new childGame.MiniGameM42();
            }
            else if (this.gameName == "古董组合1") {
                displayObject = new childGame.M14();
            }
            else if (this.gameName == "密码锁2") {
                displayObject = new childGame.M2();
            }
            else if (this.gameName == "M3aaa") {
                displayObject = new childGame.M3_2();
            }
            else if (this.gameName == "拼图迷宫5") {
                displayObject = new childGame.M5();
            }
            else if (this.gameName == "暗号6") {
                displayObject = new childGame.M6();
            }
            else if (this.gameName == "找到出口") {
                displayObject = new childGame.M9();
            }
            else if (this.gameName == "石门机关") {
                displayObject = new childGame.M24();
            }
            return displayObject;
        };
        MiniGameMediator.prototype.listNotificationInterests = function () {
            return [childGame.GameProxy.SHOW_MINIGAME];
        };
        MiniGameMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
                case childGame.GameProxy.SHOW_MINIGAME:
                    this.gameName = data;
                    this.initData();
                    break;
            }
        };
        Object.defineProperty(MiniGameMediator.prototype, "miniGame", {
            get: function () {
                return (this.viewComponent);
            },
            enumerable: true,
            configurable: true
        });
        MiniGameMediator.NAME = "MiniGameMediator";
        return MiniGameMediator;
    }(puremvc.Mediator));
    childGame.MiniGameMediator = MiniGameMediator;
    __reflect(MiniGameMediator.prototype, "childGame.MiniGameMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var MiniGameSelectMediator = (function (_super) {
        __extends(MiniGameSelectMediator, _super);
        function MiniGameSelectMediator(viewComponent) {
            var _this = _super.call(this, MiniGameSelectMediator.NAME, viewComponent) || this;
            _super.prototype.initializeNotifier.call(_this, "ChildApplicationFacade");
            _this.gameSelect.buttonList.addEventListener(eui.ItemTapEvent.ITEM_TAP, _this.selectItem, _this);
            _this.gameSelect.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initData, _this);
            return _this;
        }
        Object.defineProperty(MiniGameSelectMediator.prototype, "selectOptions", {
            get: function () {
                if (!this._selectOptions) {
                    this._selectOptions = new Map(Object.entries(RES.getRes("select-options_json")));
                }
                return this._selectOptions;
            },
            enumerable: true,
            configurable: true
        });
        MiniGameSelectMediator.prototype.initData = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.optionsItem = this.selectOptions.get(this.gameSelect.optionsId.toString());
                    this.options = this.optionsItem.options.map(function (i) {
                        return { option: i, isSelected: false };
                    });
                    this.gameSelect.buttonList.dataProvider = new eui.ArrayCollection(this.options);
                    this.gameSelect.buttonList.itemRenderer = childGame.QuestionSelectItemRenderer;
                    return [2 /*return*/];
                });
            });
        };
        MiniGameSelectMediator.prototype.selectItem = function () {
            var _this = this;
            this.options.forEach(function (i) {
                i.isSelected = i.option == _this.gameSelect.buttonList.selectedItem.option;
            });
            this.gameSelect.buttonList.dataProvider = new eui.ArrayCollection(this.options);
            this.gameSelect.buttonList.itemRenderer = childGame.QuestionSelectItemRenderer;
            if (this.gameSelect.buttonList.selectedItem.option == this.optionsItem.answer) {
                if (this.optionsItem.next) {
                    this.gameSelect.optionsId = this.optionsItem.next;
                    this.initData();
                }
                else {
                    this.sendNotification(childGame.GameProxy.PASS_MINIGAME);
                }
            }
        };
        Object.defineProperty(MiniGameSelectMediator.prototype, "gameSelect", {
            get: function () {
                return (this.viewComponent);
            },
            enumerable: true,
            configurable: true
        });
        MiniGameSelectMediator.NAME = "MiniGameSelectMediator";
        return MiniGameSelectMediator;
    }(puremvc.Mediator));
    childGame.MiniGameSelectMediator = MiniGameSelectMediator;
    __reflect(MiniGameSelectMediator.prototype, "childGame.MiniGameSelectMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var SceneDetailsWindowMediator = (function (_super) {
        __extends(SceneDetailsWindowMediator, _super);
        function SceneDetailsWindowMediator(viewComponent) {
            var _this = _super.call(this, SceneDetailsWindowMediator.NAME, viewComponent) || this;
            _super.prototype.initializeNotifier.call(_this, "ChildApplicationFacade");
            _this.proxy = _this.facade().retrieveProxy(childGame.GameProxy.NAME);
            _this.sceneDetailsWindow.sceneList.addEventListener(eui.ItemTapEvent.ITEM_TAP, _this.previewClick, _this);
            _this.sceneDetailsWindow.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.backClick, _this);
            _this.sceneDetailsWindow.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initData, _this);
            _this.initData();
            return _this;
        }
        SceneDetailsWindowMediator.prototype.initData = function () {
            var _this = this;
            var sceneList = this.proxy.sceneRes.get(this.sceneDetailsWindow.type).map(function (i) {
                var scene = __assign({}, i);
                if (_this.proxy.playerInfo.collectedScenes.includes(i.res)) {
                    scene.isCollected = true;
                    if (scene.type == childGame.SceneType.ScenePerson) {
                        scene.scale = 0.25;
                    }
                    else {
                        scene.scale = 0.42;
                    }
                }
                else {
                    scene.isCollected = false;
                    scene.res = "not-get";
                    scene.name = "未获得";
                    scene.scale = 1;
                }
                return scene;
            });
            this.sceneDetailsWindow.collectedText = sceneList.filter(function (i) { return i.isCollected; }).length + "/" + sceneList.length;
            sceneList.sort(function (a, b) {
                if (a.isCollected)
                    return -1;
                else if (b.isCollected)
                    return 1;
                return 0;
            });
            this.sceneDetailsWindow.sceneList.dataProvider = new eui.ArrayCollection(sceneList);
            this.sceneDetailsWindow.sceneList.itemRenderer = childGame.SceneDetailsItemRenderer;
        };
        SceneDetailsWindowMediator.prototype.backClick = function () {
            this.sceneDetailsWindow.close();
        };
        SceneDetailsWindowMediator.prototype.previewClick = function () {
            var sceneItem = this.sceneDetailsWindow.sceneList.selectedItem;
            if (sceneItem.isCollected) {
                var imgList = [
                    childGame.Constants.ResourceEndpoint + "resource/assets/scene/" + sceneItem.res + "." + (this.sceneDetailsWindow.type == childGame.SceneType.SceneBg ? "jpg" : "png")
                ];
                platform.showPreImage(imgList);
            }
        };
        SceneDetailsWindowMediator.prototype.listNotificationInterests = function () {
            return [];
        };
        SceneDetailsWindowMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
            }
        };
        Object.defineProperty(SceneDetailsWindowMediator.prototype, "sceneDetailsWindow", {
            get: function () {
                return (this.viewComponent);
            },
            enumerable: true,
            configurable: true
        });
        SceneDetailsWindowMediator.NAME = "SceneDetailsWindowMediator";
        return SceneDetailsWindowMediator;
    }(puremvc.Mediator));
    childGame.SceneDetailsWindowMediator = SceneDetailsWindowMediator;
    __reflect(SceneDetailsWindowMediator.prototype, "childGame.SceneDetailsWindowMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var SceneSummaryWindowMediator = (function (_super) {
        __extends(SceneSummaryWindowMediator, _super);
        function SceneSummaryWindowMediator(viewComponent) {
            var _this = _super.call(this, SceneSummaryWindowMediator.NAME, viewComponent) || this;
            _super.prototype.initializeNotifier.call(_this, "ChildApplicationFacade");
            _this.proxy = _this.facade().retrieveProxy(childGame.GameProxy.NAME);
            _this.loadResGroup();
            _this.sceneSummaryWindow.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.backClick, _this);
            _this.sceneSummaryWindow.btnSceneBg.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.sendNotification(childGame.SceneCommand.SHOW_SCENE_DETAILS, childGame.SceneType.SceneBg);
            }, _this);
            _this.sceneSummaryWindow.btnScenePerson.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.sendNotification(childGame.SceneCommand.SHOW_SCENE_DETAILS, childGame.SceneType.ScenePerson);
            }, _this);
            _this.sceneSummaryWindow.btnSceneProps.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                _this.sendNotification(childGame.SceneCommand.SHOW_SCENE_DETAILS, childGame.SceneType.SceneProps);
            }, _this);
            _this.sceneSummaryWindow.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initData, _this);
            _this.initData();
            return _this;
        }
        SceneSummaryWindowMediator.prototype.loadResGroup = function () {
            var chapterResGroup = [0, 34, 69, 134, 184, 223];
            for (var i = 0; i < 6; i++) {
                if (this.proxy.playerInfo.plotId > chapterResGroup[i]) {
                    try {
                        RES.loadGroup("chapter" + i, 0);
                    }
                    catch (err) {
                        console.log(err);
                    }
                }
            }
        };
        SceneSummaryWindowMediator.prototype.initData = function () {
            var sceneRes = RES.getRes("scene_json");
            this.sceneSummaryWindow.collectedText = this.proxy.playerInfo.collectedScenes.length + "/" + sceneRes.length;
            this.sceneSummaryWindow.finishText = "1/10";
        };
        SceneSummaryWindowMediator.prototype.backClick = function () {
            this.sceneSummaryWindow.close();
        };
        SceneSummaryWindowMediator.prototype.listNotificationInterests = function () {
            return [];
        };
        SceneSummaryWindowMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
            }
        };
        Object.defineProperty(SceneSummaryWindowMediator.prototype, "sceneSummaryWindow", {
            get: function () {
                return (this.viewComponent);
            },
            enumerable: true,
            configurable: true
        });
        SceneSummaryWindowMediator.NAME = "SceneSummaryWindowMediator";
        return SceneSummaryWindowMediator;
    }(puremvc.Mediator));
    childGame.SceneSummaryWindowMediator = SceneSummaryWindowMediator;
    __reflect(SceneSummaryWindowMediator.prototype, "childGame.SceneSummaryWindowMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var StartScreenMediator = (function (_super) {
        __extends(StartScreenMediator, _super);
        function StartScreenMediator(viewComponent) {
            var _this = _super.call(this, StartScreenMediator.NAME, viewComponent) || this;
            _super.prototype.initializeNotifier.call(_this, "ChildApplicationFacade");
            _this.proxy = _this.facade().retrieveProxy(childGame.GameProxy.NAME);
            _this.startScreen.btnResumeGame.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.entryGame, _this);
            _this.startScreen.btnNewGame.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.newGame, _this);
            _this.startScreen.btnManage.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.showManage, _this);
            _this.startScreen.btnDev.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.showDeveloper, _this);
            _this.startScreen.btnPicture.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.pictClick, _this);
            _this.startScreen.btnStore.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.storeClick, _this);
            _this.startScreen.btnShare.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.shareClick, _this);
            _this.startScreen.btnSetting.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.settingClick, _this);
            _this.startScreen.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initData, _this);
            _this.initData();
            return _this;
        }
        StartScreenMediator.prototype.initData = function () {
            this.startScreen.btnResumeGame.visible = this.proxy.playerInfo.plotId != 1 ? true : false;
        };
        StartScreenMediator.prototype.entryGame = function () {
            this.sendNotification(childGame.SceneCommand.CHANGE, childGame.Scene.Game);
        };
        StartScreenMediator.prototype.newGame = function () {
            this.proxy.playerInfo.plotId = 1;
            this.sendNotification(childGame.SceneCommand.CHANGE, childGame.Scene.Game);
        };
        StartScreenMediator.prototype.showManage = function () {
            this.sendNotification(childGame.SceneCommand.SHOW_MANAGE);
        };
        StartScreenMediator.prototype.showDeveloper = function () {
            this.sendNotification(childGame.SceneCommand.SHOW_DEVE);
        };
        StartScreenMediator.prototype.pictClick = function () {
            this.sendNotification(childGame.SceneCommand.SHOW_SCENE);
        };
        StartScreenMediator.prototype.storeClick = function () {
            this.sendNotification(childGame.SceneCommand.SHOW_STORE);
        };
        StartScreenMediator.prototype.shareClick = function () {
            platform.shareAppMessage();
        };
        StartScreenMediator.prototype.settingClick = function () {
            this.sendNotification(childGame.SceneCommand.SHOW_SETTING);
        };
        StartScreenMediator.prototype.listNotificationInterests = function () {
            return [];
        };
        StartScreenMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
            }
        };
        Object.defineProperty(StartScreenMediator.prototype, "startScreen", {
            get: function () {
                return (this.viewComponent);
            },
            enumerable: true,
            configurable: true
        });
        StartScreenMediator.NAME = "StartScreenMediator";
        return StartScreenMediator;
    }(puremvc.Mediator));
    childGame.StartScreenMediator = StartScreenMediator;
    __reflect(StartScreenMediator.prototype, "childGame.StartScreenMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var StoreWindowMediator = (function (_super) {
        __extends(StoreWindowMediator, _super);
        function StoreWindowMediator(viewComponent) {
            var _this = _super.call(this, StoreWindowMediator.NAME, viewComponent) || this;
            _super.prototype.initializeNotifier.call(_this, "ChildApplicationFacade");
            _this.proxy = _this.facade().retrieveProxy(childGame.GameProxy.NAME);
            _this.storeWindow.btnBack.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.backClick, _this);
            _this.storeWindow.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initData, _this);
            _this.initData();
            return _this;
        }
        StoreWindowMediator.prototype.initData = function () {
            var dataArr = RES.getRes("shop_json");
            var euiArr = new eui.ArrayCollection(dataArr);
            this.storeWindow.shoplist.dataProvider = euiArr;
            this.storeWindow.shoplist.itemRenderer = childGame.shop_list;
        };
        StoreWindowMediator.prototype.backClick = function () {
            this.storeWindow.close();
        };
        StoreWindowMediator.prototype.listNotificationInterests = function () {
            return [];
        };
        StoreWindowMediator.prototype.handleNotification = function (notification) {
            var data = notification.getBody();
            switch (notification.getName()) {
            }
        };
        Object.defineProperty(StoreWindowMediator.prototype, "storeWindow", {
            get: function () {
                return (this.viewComponent);
            },
            enumerable: true,
            configurable: true
        });
        StoreWindowMediator.NAME = "StoreWindowMediator";
        return StoreWindowMediator;
    }(puremvc.Mediator));
    childGame.StoreWindowMediator = StoreWindowMediator;
    __reflect(StoreWindowMediator.prototype, "childGame.StoreWindowMediator", ["puremvc.IMediator", "puremvc.INotifier"]);
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var CubeStopItemRenderer = (function (_super) {
        __extends(CubeStopItemRenderer, _super);
        function CubeStopItemRenderer() {
            var _this = _super.call(this) || this;
            _this.skinName = "CubeStopItemSkin";
            return _this;
        }
        CubeStopItemRenderer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        CubeStopItemRenderer.prototype.dataChanged = function () {
            this.img = this.data.isSelected ? this.data.img : "m20_0";
        };
        return CubeStopItemRenderer;
    }(eui.ItemRenderer));
    childGame.CubeStopItemRenderer = CubeStopItemRenderer;
    __reflect(CubeStopItemRenderer.prototype, "childGame.CubeStopItemRenderer");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var DeveloperWindow = (function (_super) {
        __extends(DeveloperWindow, _super);
        function DeveloperWindow() {
            var _this = _super.call(this) || this;
            _this.skinName = "DeveloperWindow";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        DeveloperWindow.prototype.createCompleteEvent = function (event) {
            this.height = this.stage.stageHeight;
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
        };
        return DeveloperWindow;
    }(eui.Panel));
    childGame.DeveloperWindow = DeveloperWindow;
    __reflect(DeveloperWindow.prototype, "childGame.DeveloperWindow");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var GameScreen = (function (_super) {
        __extends(GameScreen, _super);
        function GameScreen() {
            var _this = _super.call(this) || this;
            _this.description = "";
            _this.inputGroup = new childGame.MiniGameInput();
            _this.selectGroup = new childGame.MiniGameSelect();
            _this.skinName = "GameScreen";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        GameScreen.prototype.createCompleteEvent = function (event) {
            this.height = this.stage.stageHeight;
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
            childGame.ApplicationFacade.getInstance().registerMediator(new childGame.GameScreenMediator(this));
        };
        GameScreen.prototype.showInput = function (answer) {
            this.bottomGroup.removeChildren();
            this.inputGroup.setAnswer(answer);
            this.bottomGroup.addChild(this.inputGroup);
        };
        GameScreen.prototype.showSelect = function (optionsId) {
            this.bottomGroup.removeChildren();
            this.selectGroup.setOptionsId(optionsId);
            this.bottomGroup.addChild(this.selectGroup);
        };
        return GameScreen;
    }(eui.Component));
    childGame.GameScreen = GameScreen;
    __reflect(GameScreen.prototype, "childGame.GameScreen");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var InputItemRenderer = (function (_super) {
        __extends(InputItemRenderer, _super);
        function InputItemRenderer() {
            var _this = _super.call(this) || this;
            _this.skinName = "InputItemSkin";
            return _this;
        }
        InputItemRenderer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        InputItemRenderer.prototype.dataChanged = function () {
        };
        return InputItemRenderer;
    }(eui.ItemRenderer));
    childGame.InputItemRenderer = InputItemRenderer;
    __reflect(InputItemRenderer.prototype, "childGame.InputItemRenderer");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var ManageWindow = (function (_super) {
        __extends(ManageWindow, _super);
        function ManageWindow() {
            var _this = _super.call(this) || this;
            _this.skinName = "ManageWindow";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        ManageWindow.prototype.createCompleteEvent = function (event) {
            this.height = this.stage.stageHeight;
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
        };
        return ManageWindow;
    }(eui.Panel));
    childGame.ManageWindow = ManageWindow;
    __reflect(ManageWindow.prototype, "childGame.ManageWindow");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var MiniGame = (function (_super) {
        __extends(MiniGame, _super);
        function MiniGame() {
            var _this = _super.call(this) || this;
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        MiniGame.prototype.addMiniGame = function (className) {
            if (className === void 0) { className = ""; }
            var clazz = egret.getDefinitionByName(className);
            this._miniGame = new clazz();
            this.addChild(this._miniGame);
        };
        MiniGame.prototype.addMiniGameObject = function (displayObject) {
            this.addChild(displayObject);
        };
        MiniGame.prototype.clearStage = function () {
            this.removeChildren();
        };
        MiniGame.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
            childGame.ApplicationFacade.getInstance().registerMediator(new childGame.MiniGameMediator(this));
        };
        return MiniGame;
    }(eui.Component));
    childGame.MiniGame = MiniGame;
    __reflect(MiniGame.prototype, "childGame.MiniGame");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var MiniGameCubeStop = (function (_super) {
        __extends(MiniGameCubeStop, _super);
        function MiniGameCubeStop() {
            var _this = _super.call(this) || this;
            _this.skinName = "MiniGameCubeStop";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        MiniGameCubeStop.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
            childGame.ApplicationFacade.getInstance().registerMediator(new childGame.MiniGameCubeStopMediator(this));
        };
        return MiniGameCubeStop;
    }(eui.Component));
    childGame.MiniGameCubeStop = MiniGameCubeStop;
    __reflect(MiniGameCubeStop.prototype, "childGame.MiniGameCubeStop");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var MiniGameFloorSwitch = (function (_super) {
        __extends(MiniGameFloorSwitch, _super);
        function MiniGameFloorSwitch() {
            var _this = _super.call(this) || this;
            _this.skinName = "MiniGameFloorSwitch";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        MiniGameFloorSwitch.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
            childGame.ApplicationFacade.getInstance().registerMediator(new childGame.MiniGameFloorSwitchMediator(this));
        };
        return MiniGameFloorSwitch;
    }(eui.Component));
    childGame.MiniGameFloorSwitch = MiniGameFloorSwitch;
    __reflect(MiniGameFloorSwitch.prototype, "childGame.MiniGameFloorSwitch");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var MiniGameInput = (function (_super) {
        __extends(MiniGameInput, _super);
        function MiniGameInput() {
            var _this = _super.call(this) || this;
            _this.skinName = "MiniGameInput";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        MiniGameInput.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
            childGame.ApplicationFacade.getInstance().registerMediator(new childGame.MiniGameInputMediator(this));
        };
        MiniGameInput.prototype.setAnswer = function (str) {
            this.answer = str;
        };
        return MiniGameInput;
    }(eui.Component));
    childGame.MiniGameInput = MiniGameInput;
    __reflect(MiniGameInput.prototype, "childGame.MiniGameInput");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var MiniGameJigsawM08 = (function (_super) {
        __extends(MiniGameJigsawM08, _super);
        function MiniGameJigsawM08() {
            var _this = _super.call(this) || this;
            _this.skinName = "MiniGameJigsawM08";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        MiniGameJigsawM08.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
            childGame.ApplicationFacade.getInstance().registerMediator(new childGame.MiniGameJigsawM08Mediator(this));
        };
        return MiniGameJigsawM08;
    }(eui.Component));
    childGame.MiniGameJigsawM08 = MiniGameJigsawM08;
    __reflect(MiniGameJigsawM08.prototype, "childGame.MiniGameJigsawM08");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var MiniGameJigsawM16 = (function (_super) {
        __extends(MiniGameJigsawM16, _super);
        function MiniGameJigsawM16() {
            var _this = _super.call(this) || this;
            _this.skinName = "MiniGameJigsawM16";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        MiniGameJigsawM16.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
            childGame.ApplicationFacade.getInstance().registerMediator(new childGame.MiniGameJigsawM16Mediator(this));
        };
        return MiniGameJigsawM16;
    }(eui.Component));
    childGame.MiniGameJigsawM16 = MiniGameJigsawM16;
    __reflect(MiniGameJigsawM16.prototype, "childGame.MiniGameJigsawM16");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var MiniGameM42 = (function (_super) {
        __extends(MiniGameM42, _super);
        function MiniGameM42() {
            var _this = _super.call(this) || this;
            _this.skinName = "MiniGameM42";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        MiniGameM42.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
            childGame.ApplicationFacade.getInstance().registerMediator(new childGame.MiniGameM42Mediator(this));
        };
        return MiniGameM42;
    }(eui.Component));
    childGame.MiniGameM42 = MiniGameM42;
    __reflect(MiniGameM42.prototype, "childGame.MiniGameM42");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var MiniGameSelect = (function (_super) {
        __extends(MiniGameSelect, _super);
        function MiniGameSelect() {
            var _this = _super.call(this) || this;
            _this.skinName = "MiniGameSelect";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        MiniGameSelect.prototype.createCompleteEvent = function (event) {
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
            childGame.ApplicationFacade.getInstance().registerMediator(new childGame.MiniGameSelectMediator(this));
        };
        MiniGameSelect.prototype.setOptionsId = function (optionsId) {
            this.optionsId = optionsId;
        };
        return MiniGameSelect;
    }(eui.Component));
    childGame.MiniGameSelect = MiniGameSelect;
    __reflect(MiniGameSelect.prototype, "childGame.MiniGameSelect");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var QuestionSelectItemRenderer = (function (_super) {
        __extends(QuestionSelectItemRenderer, _super);
        function QuestionSelectItemRenderer() {
            var _this = _super.call(this) || this;
            _this.skinName = "QuestionSelectItemSkin";
            return _this;
        }
        QuestionSelectItemRenderer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        QuestionSelectItemRenderer.prototype.dataChanged = function () {
            this.fontSize = 40;
            if (this.data.option.length > 15) {
                this.fontSize = 32;
            }
            if (this.data.isSelected) {
                this.scaleX = this.scaleY = 0.9;
            }
        };
        return QuestionSelectItemRenderer;
    }(eui.ItemRenderer));
    childGame.QuestionSelectItemRenderer = QuestionSelectItemRenderer;
    __reflect(QuestionSelectItemRenderer.prototype, "childGame.QuestionSelectItemRenderer");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var SceneDetailsItemRenderer = (function (_super) {
        __extends(SceneDetailsItemRenderer, _super);
        function SceneDetailsItemRenderer() {
            var _this = _super.call(this) || this;
            _this.skinName = "SceneDetailsItemSkin";
            return _this;
        }
        SceneDetailsItemRenderer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        SceneDetailsItemRenderer.prototype.dataChanged = function () {
        };
        return SceneDetailsItemRenderer;
    }(eui.ItemRenderer));
    childGame.SceneDetailsItemRenderer = SceneDetailsItemRenderer;
    __reflect(SceneDetailsItemRenderer.prototype, "childGame.SceneDetailsItemRenderer");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var SceneDetailsWindow = (function (_super) {
        __extends(SceneDetailsWindow, _super);
        function SceneDetailsWindow() {
            var _this = _super.call(this) || this;
            _this.skinName = "SceneDetailsWindow";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        SceneDetailsWindow.prototype.createCompleteEvent = function (event) {
            this.height = this.stage.stageHeight;
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
            childGame.ApplicationFacade.getInstance().registerMediator(new childGame.SceneDetailsWindowMediator(this));
        };
        SceneDetailsWindow.prototype.setSceneType = function (type) {
            this.type = type;
            if (type == childGame.SceneType.SceneBg) {
                this.titleRes = "title-scene-cg";
            }
            else if (type == childGame.SceneType.ScenePerson) {
                this.titleRes = "title-person-cg";
            }
            else {
                this.titleRes = "title-props-cg";
            }
        };
        return SceneDetailsWindow;
    }(eui.Panel));
    childGame.SceneDetailsWindow = SceneDetailsWindow;
    __reflect(SceneDetailsWindow.prototype, "childGame.SceneDetailsWindow");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var SceneSummaryWindow = (function (_super) {
        __extends(SceneSummaryWindow, _super);
        function SceneSummaryWindow() {
            var _this = _super.call(this) || this;
            _this.skinName = "SceneSummaryWindow";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        SceneSummaryWindow.prototype.createCompleteEvent = function (event) {
            this.height = this.stage.stageHeight;
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
            childGame.ApplicationFacade.getInstance().registerMediator(new childGame.SceneSummaryWindowMediator(this));
        };
        return SceneSummaryWindow;
    }(eui.Panel));
    childGame.SceneSummaryWindow = SceneSummaryWindow;
    __reflect(SceneSummaryWindow.prototype, "childGame.SceneSummaryWindow");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var SettingWindow = (function (_super) {
        __extends(SettingWindow, _super);
        function SettingWindow() {
            var _this = _super.call(this) || this;
            _this.skinName = "SettingWindow";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        SettingWindow.prototype.createCompleteEvent = function (event) {
            this.height = this.stage.stageHeight;
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
        };
        return SettingWindow;
    }(eui.Panel));
    childGame.SettingWindow = SettingWindow;
    __reflect(SettingWindow.prototype, "childGame.SettingWindow");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var StartScreen = (function (_super) {
        __extends(StartScreen, _super);
        function StartScreen() {
            var _this = _super.call(this) || this;
            _this.skinName = "ChildStartScreen";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        StartScreen.prototype.createCompleteEvent = function (event) {
            this.height = this.stage.stageHeight;
            //this.navigationBar.y = this.stage.stageHeight - this.navigationBar.height - 20;
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
            childGame.ApplicationFacade.getInstance().registerMediator(new childGame.StartScreenMediator(this));
        };
        StartScreen.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
            console.log(partName);
        };
        return StartScreen;
    }(eui.Component));
    childGame.StartScreen = StartScreen;
    __reflect(StartScreen.prototype, "childGame.StartScreen");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var StoreWindow = (function (_super) {
        __extends(StoreWindow, _super);
        function StoreWindow() {
            var _this = _super.call(this) || this;
            _this.skinName = "StoreWindow";
            _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createCompleteEvent, _this);
            return _this;
        }
        StoreWindow.prototype.createCompleteEvent = function (event) {
            this.height = this.stage.stageHeight;
            this.removeEventListener(eui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);
            childGame.ApplicationFacade.getInstance().registerMediator(new childGame.StoreWindowMediator(this));
        };
        return StoreWindow;
    }(eui.Panel));
    childGame.StoreWindow = StoreWindow;
    __reflect(StoreWindow.prototype, "childGame.StoreWindow");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var SwitchItemRenderer = (function (_super) {
        __extends(SwitchItemRenderer, _super);
        function SwitchItemRenderer() {
            var _this = _super.call(this) || this;
            _this.skinName = "SwitchItemSkin";
            return _this;
        }
        SwitchItemRenderer.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
        };
        SwitchItemRenderer.prototype.dataChanged = function () {
            if (this.data.isSelected) {
                this.buttonImg.scaleX = this.buttonImg.scaleY = 0.9;
            }
        };
        return SwitchItemRenderer;
    }(eui.ItemRenderer));
    childGame.SwitchItemRenderer = SwitchItemRenderer;
    __reflect(SwitchItemRenderer.prototype, "childGame.SwitchItemRenderer");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var shop_list = (function (_super) {
        __extends(shop_list, _super);
        function shop_list() {
            var _this = _super.call(this) || this;
            _this.skinName = 'resource/containers/skins_list/shop_list.exml';
            _this.pay.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.haha, _this);
            return _this;
        }
        shop_list.prototype.haha = function () {
            console.log("你花费了" + this.pay_money.text);
        };
        return shop_list;
    }(eui.ItemRenderer));
    childGame.shop_list = shop_list;
    __reflect(shop_list.prototype, "childGame.shop_list");
})(childGame || (childGame = {}));
var childGame;
(function (childGame) {
    var wordList = (function (_super) {
        __extends(wordList, _super);
        function wordList() {
            var _this = _super.call(this) || this;
            _this.skinName = 'resource/containers/skins_list/M3_2_List.exml';
            return _this;
        }
        return wordList;
    }(eui.ItemRenderer));
    childGame.wordList = wordList;
    __reflect(wordList.prototype, "childGame.wordList");
})(childGame || (childGame = {}));
