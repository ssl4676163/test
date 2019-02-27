import { Component, ViewChild, ChangeDetectorRef} from '@angular/core';
import { NavController,ToastController,MenuController,App,LoadingController ,Slides} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ModalController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { MusicPage } from '../music/music';

declare var Swiper;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('contentSlides') contentSlides:Slides;
  swiper:any;
  public Nowdate: string;
  private lastId: string = '';
  newListData: Array<string> =[];
  listData: Object;
  now = new Date(); // 当前时间
  hour = this.now.getHours();
  sayHolle = "早上好";
  musicPage;
  testArray:string[]=[ '菜单一','菜单二' ,'菜单三' ,'菜单四' ];
  menus: Array<string> = [this.sayHolle, "我的订阅", "猜你喜欢", "视频"];
  testSegment:string=this.testArray[0];
  constructor(public navCtrl: NavController,public app: App,public modalCtrl: ModalController,public rest:RestProvider,public loadingCtrl: LoadingController, public menu: MenuController,private toastCtrl: ToastController,public cd :ChangeDetectorRef) {
    menu.enable(true);
    this.musicPage =  MusicPage;
  }

  ionViewDidLoad(){
    this.changeHello();
    this.contentSlides.lockSwipeToPrev(true);
  }

  changeHello(){
    if(this.hour>=6 && this.hour <10){
      this.sayHolle = "早上好";
    }else if(this.hour>=10 && this.hour < 14){
      this.sayHolle = "中午好";
    }else if(this.hour >=14 && this.hour < 18){
      this.sayHolle = "下午好";
    }else {
      this.sayHolle = "晚上好";
    }
    this.menus.splice(0,1,this.sayHolle);
  }

  slideChanged() {
    let index = this.contentSlides.getActiveIndex();
    this.setStyle(index);
    if(index == 0){
      this.contentSlides.lockSwipeToPrev(true);
    }else if(index>0 && index <3){
      this.contentSlides.lockSwipeToPrev(false);
    }
    if(index == 3){
      this.contentSlides.lockSwipeToNext(true);
    }else if(index<3 && index >0){
      this.contentSlides.lockSwipeToNext(false);
    }
  }

  selectPageMenu(event,index){
    this.contentSlides.slideTo(index);
    if(index == 3){
      this.contentSlides.lockSwipeToPrev(false);
    }else if(index == 0){
      this.contentSlides.lockSwipeToNext(false);
    }
  }

  setStyle(index) {
    var slides = document.getElementsByClassName('pageMenuSlides')[0].getElementsByClassName('swiper-slide');
    if (index < slides.length) {
      for (var i = 0; i < slides.length; i++) {
        var s = slides[i];
        s.className = "swiper-slide";
      }
      slides[index].className = "swiper-slide bottomLine";
    }
  }

  initSwiper() {
    this.swiper = new Swiper('.pageMenuSlides .swiper-container', {
      slidesPerView: 4,
      spaceBetween: 0,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 0
        },
        320: {
          slidesPerView: 4,
          spaceBetween: 0
        }
      }
    });
  }

  doInfinite(){
    this.presentLoading();
  }

  doRefresh(refresher){
    this.presentLoading();

    setTimeout(() => {
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
      console.log(res.json());
    })
  }

  openPage(id){
    let data: Object = {
      pageId: id
    };
    let profileModal = this.modalCtrl.create(DetailPage, data);
    profileModal.present();
  }

  music(){
    this.navCtrl.push(MusicPage);
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
