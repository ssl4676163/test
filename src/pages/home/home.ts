import { Component, ViewChild} from '@angular/core';
import { NavController,ToastController,MenuController,App,LoadingController ,Slides} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ModalController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

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
  testArray:string[]=[ '菜单一','菜单二' ,'菜单三' ,'菜单四' ];
  menus: Array<string> = ["早上好", "我的订阅", "猜你喜欢", "视频"];
  testSegment:string=this.testArray[0];
  constructor(public navCtrl: NavController,public app: App,public modalCtrl: ModalController,public rest:RestProvider,public loadingCtrl: LoadingController, public menu: MenuController,private toastCtrl: ToastController) {
    menu.enable(true);
  }

  ionViewDidLoad(){
    // let flag = this.contentSlides.;
    this.contentSlides.lockSwipeToPrev(true);
    // this.initSwiper();
    // this.getHomeInfo('29');
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
