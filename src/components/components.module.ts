import { NgModule } from '@angular/core';
import { MorningComponent } from './morning/morning';
import { myReadComponent } from './myRead/myRead';
import { GuessYouLikeComponent } from './guessYouLike/guessYouLike';
import { VideoComponent } from './video/video';
import { IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
	declarations: [MorningComponent,myReadComponent,GuessYouLikeComponent,VideoComponent],
	imports: [IonicModule.forRoot(ComponentsModule),BrowserModule],
	exports: [MorningComponent,myReadComponent,GuessYouLikeComponent]
})
export class ComponentsModule {}
