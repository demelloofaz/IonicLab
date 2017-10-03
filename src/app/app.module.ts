import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TitlePage } from '../pages/TitlePage/TitlePage';
import { TOCPage } from '../pages/TOCPage/TOCPage';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { APage1 } from '../pages/APage1/APage1';
import { APage2 } from '../pages/APage2/APage2';
import { APage3 } from '../pages/APage3/APage3';
import { APage4 } from '../pages/APage4/APage4';
import { APage5 } from '../pages/APage5/APage5';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TitlePage,
    TOCPage,
    APage1,
    APage2,
    APage3,
    APage4,
    APage5,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TitlePage,
    TOCPage,
    APage1,
    APage2,
    APage3,
    APage4,
    APage5,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
