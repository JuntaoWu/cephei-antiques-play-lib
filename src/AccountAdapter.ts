module childGame {
    export class AccountAdapter {

        static async checkForUpdate() {
            return new Promise(async (resolve, reject) => {
                if (platform.name == "DebugPlatform") {
                    return resolve({
                        hasUpdate: false
                    });
                }
                let version = await platform.getVersion() || 0;
                console.log(`Check version begin, current version is: ${version}`);
                var request = new egret.HttpRequest();
                request.responseType = egret.HttpResponseType.TEXT;
                request.open(`${childGame.Constants.Endpoints.service}version/check?version=${version}`, egret.HttpMethod.GET);
                request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                request.send();
                request.addEventListener(egret.Event.COMPLETE, (event: egret.Event) => {
                    let req = <egret.HttpRequest>(event.currentTarget);
                    let res = JSON.parse(req.response);
                    if (res.error) {
                        console.error(res.message);
                        reject(res.message);
                    }
                    else {
                        console.log(`Check version end, lastest version is: ${res.data && res.data.version || version}`);
                        resolve(res.data);
                    }
                }, this);
                // request.addEventListener(egret.IOErrorEvent.IO_ERROR, this.onGetIOError, this);
                // request.addEventListener(egret.ProgressEvent.PROGRESS, this.onGetProgress, this);
            });
        }
    }
}
