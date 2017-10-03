import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { APage2 } from '../APage2/APage2';
import { APage4 } from '../APage4/APage4';
import { TOCPage } from '../TOCPage/TOCPage';

@Component({
  selector: 'a-page3-ionic',
  templateUrl: 'APage3.html'
})
export class APage3 {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  GoToPage(idx) {
    debugger;
    if (idx == 1)
      this.navCtrl.push(APage2, {});
    if (idx == 2)
        this.navCtrl.push(APage4, {});
    if (idx == 0)
      this.navCtrl.push(TOCPage, {});
  }
}
