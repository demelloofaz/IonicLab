import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TOCPage } from '../TOCPage/TOCPage';

@Component({
  selector: 'title-page-ionic',
  templateUrl: 'TitlePage.html'
})
export class TitlePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  GoToChapter(idx) {
    debugger;
    if (idx == 0)
      this.navCtrl.push(TOCPage, {});
  }
}
