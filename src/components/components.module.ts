import { NgModule } from '@angular/core';
import { MorningComponent } from './morning/morning';
import { IonicModule } from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
	declarations: [MorningComponent],
	imports: [IonicModule.forRoot(ComponentsModule),BrowserModule],
	exports: [MorningComponent]
})
export class ComponentsModule {}
