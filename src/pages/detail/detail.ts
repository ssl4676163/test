import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { PhotoViewer } from '@ionic-native/photo-viewer';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  public pageId: string;
  public title:string;
  public content:string;
  public time:string;
  public source:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public rest:RestProvider) {
  }

  ionViewDidLoad() {
    // let modelData: string = 'pageId：' + this.navParams.get('pageId'); 
    // console.log(modelData);
    this.getDetail();
  }

  clickPage(event){
    if(event['path'][0]['currentSrc'] != undefined){
      console.log(event['path'][0]['currentSrc']);
      // this.photo.show(event['path'][0]['currentSrc'],'My image title', {share: false});
    }
  }
  
  getDetail(){
    this.rest.getDetail2(this.navParams.get('pageId')).subscribe(res =>{
      this.title = res.json()['list']['title'];
      this.content = res.json()['list']['content'];
      this.time = res.json()['list']['ip&time']['time'];
      this.source = res.json()['list']['author'];
      console.log(res.json())
      
    },error=>{
      console.log(error);
    });
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
