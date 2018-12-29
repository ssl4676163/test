import {ComponentsModule} from "../../components/components.module";
import { IonicPageModule } from 'ionic-angular';
import { MorningComponent } from '../../components/morning/morning';
import { myReadComponent } from '../../components/myRead/myRead';
import { GuessYouLikeComponent } from '../../components/guessYouLike/guessYouLike';
import { VideoComponent } from "../../components/video/video";
imports: [

ComponentsModule, //添加

IonicPageModule.forChild(MorningComponent),
IonicPageModule.forChild(myReadComponent),
IonicPageModule.forChild(GuessYouLikeComponent),
IonicPageModule.forChild(VideoComponent)

]