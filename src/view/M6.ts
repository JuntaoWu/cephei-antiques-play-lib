module childGame {
	export class M6 extends eui.Component implements eui.UIComponent {

		public button1: eui.Button;
		public button2: eui.Button;
		public button3: eui.Button;
		public button4: eui.Button;
		public button5: eui.Button;
		public win: eui.Label;
		public lose: eui.Group;
		public again: eui.Button;

		public allButton: Array<eui.Button> = [];

		public constructor() {
			super();
			this.skinName = "M6Skin";
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
		}


		protected childrenCreated(): void {
			super.childrenCreated();

			this.allButton = [this.button1, this.button2, this.button3, this.button4, this.button5];

			this.button1.addEventListener(egret.TouchEvent.TOUCH_TAP, (() => { this.key(this.button1, "1") }), this);
			this.button2.addEventListener(egret.TouchEvent.TOUCH_TAP, (() => { this.key(this.button2, "2") }), this);
			this.button3.addEventListener(egret.TouchEvent.TOUCH_TAP, (() => { this.key(this.button3, "3") }), this);
			this.button4.addEventListener(egret.TouchEvent.TOUCH_TAP, (() => { this.key(this.button4, "4") }), this);
			this.button5.addEventListener(egret.TouchEvent.TOUCH_TAP, (() => { this.key(this.button5, "5") }), this);
		}

		private password: string = "0";
		private key(but: eui.Button, i: string) {
			but.enabled = false;
			but.scaleX = 0.8;
			but.scaleY = 0.8;
			this.password += i;
			if (this.password.length == 5) {
				if (this.password == "05421") {
					this.win.visible = true;
					ApplicationFacade.getInstance().sendNotification(GameProxy.PASS_MINIGAME);
				} else {
					this.lose.visible = true;
					this.again.addEventListener(egret.TouchEvent.TOUCH_TAP, this.tryAgain, this);
				}
			}
		}

		private tryAgain() {
			this.lose.visible = false;
			this.password = "0";
			this.allButton.forEach(but => {
				but.enabled = true;
				but.scaleX = 1;
				but.scaleY = 1;
			})
		}
	}
}
