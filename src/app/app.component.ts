import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { TitlePage } from '../pages/TitlePage/TitlePage';
import { TOCPage } from '../pages/TOCPage/TOCPage';
//import { ListPage } from '../pages/list/list';
import { APage1 } from '../pages/APage1/APage1';
import { APage4 } from '../pages/APage4/APage4';
import { APage5 } from '../pages/APage5/APage5';
//import { APage2 } from '../pages/APage2/APage2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = TitlePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Title Page', component: TitlePage },
      { title: 'Table of Contents', component: TOCPage },
      { title: 'The Allegations', component: APage1 },
      { title: 'The Admission', component: APage4 },
      { title: 'The Fall', component: APage5 }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
