import { Component } from '@angular/core';
import { NavController,ToastController,MenuController,App,LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ModalController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
    selector: 'page-myRead',
    templateUrl: 'myRead.html'
})

export class myReadPage {
    
  public Nowdate: string;
  private lastId: string = '';
  newListData: Array<string> =[];
  listData: Object;
  testArray:string[]=[ '菜单一','菜单二' ,'菜单三' ,'菜单四' ];
  menus: Array<string> = ["滑动菜单", "滑动菜单", "滑动菜单", "滑动菜单"];
  testSegment:string=this.testArray[0];
  constructor(public navCtrl: NavController,public app: App,public modalCtrl: ModalController,public rest:RestProvider,public loadingCtrl: LoadingController, public menu: MenuController,private toastCtrl: ToastController) {
    this.ionViewDidLoad();
    menu.enable(true);
  }

  ionViewDidLoad(){
    this.getHomeInfo('29');
  }

  selectPageMenu(event,index){

  }

  doInfinite(){
    this.presentLoading();
  }

  doRefresh(refresher){
    this.presentLoading();

    setTimeout(() => {
      console.log(new Date());
      refresher.complete();
      this.Nowdate = '上次刷新：' + (new Date().getMonth() + 1).toString() + '月 '
        + new Date().getDate().toString() + '日  '
        + new Date().getHours().toString() + '-'
        + new Date().getMinutes().toString() + '-'
        + new Date().getSeconds().toString();
      this.loadingCtrl.create().dismiss();
      this.lastId = '';
      this.newListData = [];
      this.getHomeInfo('');
    }, 2000);
  }

  getHomeInfo(lastId:string){
    this.rest.getNewsList(lastId).subscribe(res => {
      this.listData = res.json();
      this.listData = this.listData['list'];
    //   console.log(res.json());
    //   console.log('22222222222');
    })
  }

  openPage(id){
    // this.presentToast(id);
    let data: Object = {
      pageId: id
    };
    let profileModal = this.modalCtrl.create(DetailPage, data);
    profileModal.present();
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "请等待...",
      duration: 3000
    });
    loader.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}