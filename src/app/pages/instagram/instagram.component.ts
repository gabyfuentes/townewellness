import { Component, OnInit } from '@angular/core';
import { InstagramService } from './instagram.service';
import {Instagram} from './instagram';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {

posts

  constructor(private _serv: InstagramService) { }

  getPosts(){
    this._serv.getPosts().subscribe(posts => this.posts = posts)
  }
  ngOnInit() {
    return this.getPosts()

  }

}
