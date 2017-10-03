import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { APage4 } from '../APage4/APage4';
import { TOCPage } from '../TOCPage/TOCPage';

@Component({
  selector: 'a-page5-ionic',
  templateUrl: 'APage5.html'
})
export class APage5 {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  GoToPage(idx) {
    debugger;
    if (idx == 1)
      this.navCtrl.push(APage4, {});
    if (idx == 0)
      this.navCtrl.push(TOCPage, {});
  }
}
