import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: HttpClient, public ht: Http) {
    // console.log('Hello RestProvider Provider');
  }

  private loginUrl = 'http://wm.bandao.cn/api/?module=user.login';

  login(mobile,password):Observable<string[]>{
    return this.getUrlReturn(this.loginUrl+"&tel="+mobile+"&p="+password);
  }

  private getUrlReturn(url:string):Observable<string[]>{
    // return this.http.get(url).map(this.extractData).catch(this.handleError);
    return this.ht.get(url).map(res=> res.json(),err=>{
      console.log(err);
    })
  }

  // private extractData(res:Response){
  //   let body = res.json();
  //   return JSON.parse(body) || {};
  // }

  loadUsers():Observable<any>{
    return this.ht.get(this.loginUrl).map(res => res.json(), err => {
      console.log(err);
    })
  }

  getHomeInfo(category:string,lastId:string): Observable<Response | any> {
    if(category == '' && lastId =='')
      return this.ht.request('http://wm.bandao.cn/api/?module=news.list&c=1');
    if(category != '' && lastId =='')
      return this.ht.request('http://wm.bandao.cn/api/?module=news.list&c='+category);
    if(category != '' && lastId =='')
      return this.ht.request('http://wm.bandao.cn/api/?module=news.list&c='+category+'&lastid='+lastId);
    // return this.ht.request('http://www.sg1989.com/ionic/news.php');
  }

  getNewsList(lastId:string):Observable<Response | any>{
    return this.ht.request('http://www.sg1989.com/newsphp/app/getNews.php?id='+lastId);
  }

  getHomeInfo2(lastId:string): Observable<Response | any> {
  return this.ht.request('http://wm.bandao.cn/api/?module=news.list&lastid='+lastId);
  // return this.ht.request('http://www.sg1989.com/ionic/news.php');
  }

  getCategory():Observable<Response | any>{
    return this.ht.request('http://muji.bandao.cn/api/blog/category/');
  }

  getDetail(id:string):Observable<Response | any>{
    return this.ht.request('http://wm.bandao.cn/api/?module=news.list&id='+id);
  }

  getDetail2(id:string):Observable<Response | any>{
    return this.ht.request('http://www.sg1989.com/newsphp/app/getDetail.php?id='+id);
  }

  // private handleError(error:Response | any){
  //   let errMsg : string;
  //   console.log(error);
  //   if(error instanceof Response){
  //     const body = error.json() ||'';
  //     const err = body || JSON.stringify(body);
  //     errMsg = '${error.Status} - ${error.statusText || ""} ${err}';
  //   }else{
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }

}
