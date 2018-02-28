import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Jsonp} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Instagram } from './instagram'
import { map } from 'rxjs/operator/map';


@Injectable()
export class InstagramService {

  constructor(private http: Http, private jsonp: Jsonp) { }

  private url = ""

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
