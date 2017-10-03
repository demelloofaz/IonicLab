import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { APage1 } from '../APage1/APage1';
import { APage4 } from '../APage4/APage4';
import { APage5 } from '../APage5/APage5';
import { TitlePage } from '../TitlePage/TitlePage';

@Component({
  selector: 'toc-page-ionic',
  templateUrl: 'TOCPage.html'
})
export class TOCPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  GoToChapter(idx) {
    debugger;
    if (idx == 0)
      this.navCtrl.push(TitlePage, {});
    if (idx == 1)
      this.navCtrl.push(APage1, {});
    if (idx == 2)
        this.navCtrl.push(APage4, {});
    if (idx == 3)
        this.navCtrl.push(APage5, {});
  }
}
