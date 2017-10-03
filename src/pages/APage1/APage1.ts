import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { APage2 } from '../APage2/APage2';
import { TOCPage } from '../TOCPage/TOCPage';

@Component({
  selector: 'a-page1-ionic',
  templateUrl: 'APage1.html'
})
export class APage1 {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  GoToPage(idx) {
    debugger;
    if (idx == 2)
       this.navCtrl.push(APage2, {});
    else if (idx == 0)
       this.navCtrl.push(TOCPage, {});
  }
}
