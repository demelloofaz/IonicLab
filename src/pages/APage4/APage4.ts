import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { APage3 } from '../APage3/APage3';
import { APage5 } from '../APage5/APage5';
import { TOCPage } from '../TOCPage/TOCPage';

@Component({
  selector: 'a-page4-ionic',
  templateUrl: 'APage4.html'
})
export class APage4 {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  GoToPage(idx) {
    debugger;
    if (idx == 1)
      this.navCtrl.push(APage3, {});
    if (idx == 2)
      this.navCtrl.push(APage5, {});
    if (idx == 0)
      this.navCtrl.push(TOCPage, {});
  }
}
