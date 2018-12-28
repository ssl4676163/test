import {ComponentsModule} from "../../components/components.module";
import { IonicPageModule } from 'ionic-angular';
import { MorningComponent } from '../../components/morning/morning';
imports: [

ComponentsModule, //添加

IonicPageModule.forChild(MorningComponent)

]