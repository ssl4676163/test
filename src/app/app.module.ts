import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { RestProvider } from '../providers/rest/rest';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';
import { MorningPage } from '../pages/morning/morning';
import { myReadPage } from '../pages/myRead/myRead';
import { guessYouLikePage } from '../pages/guessYouLike/guessYouLike';
import { VideoPage } from '../pages/video/video';
import { TabsPage } from '../pages/tabs/tabs';
import { DiscoverPage } from '../pages/discover/discover';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    ListPage,
    DetailPage,
    MorningPage,
    myReadPage,
    guessYouLikePage,
    VideoPage,
    DiscoverPage
  ],
  imports: [
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    MorningPage,
    myReadPage,
    guessYouLikePage,
    VideoPage,
    DiscoverPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    RestProvider,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
