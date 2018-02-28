import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { animate, trigger, style, state, transition, stagger, query } from "@angular/animations";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('menuAnimation', [
      transition('void => *', [
        query('li', style({
          transform: 'translateX(70px)',
          opacity: 0
        })),
        query('li',
          stagger('200ms', [
            animate('0.9s ease-out', style({
              transform: 'translateX(0)',
              opacity: 1
            }))
          ])),
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

mycolor = 'black'

changeStyle(){
  if(isPlatformBrowser(this.platformId)){
    let path = window.location.pathname
    switch(path){
      case '/team':
      this.mycolor = 'white';
      break;
      case '/our-pharmacy':
      this.mycolor = 'white';
      break;
      default:
      this.mycolor = 'black';
    }
    return this.mycolor
  }
  
}
  ngOnInit() {
  }

}
