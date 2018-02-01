import { Component, OnInit, HostListener } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

style: any;
  constructor(meta: Meta, title: Title) { 
    title.setTitle('Towne Pharmacy');
    meta.addTags([
      { name: 'author', content: 'towne Pharmacy'},
      { name: 'keywords', content: 'Pharmacy'},
      { name: 'description', content: 'Towne pharmacy is an independent pharmacy in cedar knolls, NJ'}
    ])
  }

  ngOnInit() {

  }

  

}
