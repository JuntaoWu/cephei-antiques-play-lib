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

    applyUpdate(version: string);

    getOpenDataContext();

    shareAppMessage(message?: string, query?: string, callback?: Function);

    showShareMenu();

    setStorage(key, value);

    getStorage(key);

    setStorageAsync(key, value);

    getStorageAsync(key): Promise<any>;

    getLaunchInfo();

    showPreImage(data: any, index?: any);

    authorizeUserInfo(callback);

    createBannerAd(name: string, adUnitId: string, style: any);

    showBannerAd(name: string);

    hideAllBannerAds();

    createRewardedVideoAd(name: string, adUnitId: string, callback: Function, onError: Function);

    showVideoAd(name: string);

    isVideoAdDisabled(name: string);

    disableVideoAd(name: string);
}

declare let platform: Platform;

declare interface Window {
    platform: Platform
}

