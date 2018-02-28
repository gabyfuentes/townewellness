import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { animate, trigger, style, state, transition} from '@angular/animations';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  animations:[
    trigger('openSideBar',[
      state('show', style({
        transform: 'translateX(0)'
      })),
      state('hide', style({
        transform: 'translateX(-100%)'
      }
      )),
      transition('show => hide', animate('0.3s ease-out')),
      transition('hide => show', animate('0.3s ease-out')),
    ])
  ]
})
export class SideBarComponent implements OnInit {

  state = "hide";
  constructor(private el: ElementRef ) { }
  

  openSideBar(){
    this.state = this.state == 'hide' ? 'show' : 'hide'
  }

  ngOnInit() {}

}
