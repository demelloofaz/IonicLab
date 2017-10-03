import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { APage1 } from '../APage1/APage1';
import { APage3 } from '../APage3/APage3';
import { TOCPage } from '../TOCPage/TOCPage';

@Component({
  selector: 'a-page2-ionic',
  templateUrl: 'APage2.html'
})
export class APage2 {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  GoToPage(idx) {
    debugger;
    if (idx == 1)
      this.navCtrl.push(APage1, {});
    if (idx == 2)
        this.navCtrl.push(APage3, {});
    if (idx == 0)
      this.navCtrl.push(TOCPage, {});
  }
}
