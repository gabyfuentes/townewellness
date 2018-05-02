import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Jsonp} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Instagram } from './instagram'
import { map } from 'rxjs/operator/map';


@Injectable()
export class InstagramService {

  constructor(private http: Http, private jsonp: Jsonp) { }

  private url = 'https://api.instagram.com/v1/users/5628029609/media/recent/?access_token=5628029609.1677ed0.e04309f7033b4478b36ce28845501de7&callback=JSONP_CALLBACK'

  getPosts(){
    // return this._jsonp.get(this.url).map(res => res.json().data);
    return this.jsonp.get(this.url).map(res => res.json().data);
  }

  getPost(id: Instagram) : Observable<any>{
    return this.jsonp.get(this.url)
    .map(res => res.json().data)
    .map((list:Array<any>) => {
      let result: Instagram = new Instagram();
      if (list){
        list.forEach(element => {
          if (element.id === id){
            result = element;
          }
        });
        return result;
      }
    });
  }
}
