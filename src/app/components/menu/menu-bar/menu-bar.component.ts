import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, animate, state, style, transition } from '@angular/animations';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  animations: [
    trigger('navBar', [
      state('show', style({
        opacity: 1,
        transform: "translateY(0)"
      })),
      state('hide', style({
        opacity: 0,
        transform: "translateY(-100%)"
      })),
      transition('show => hide', animate('500ms ease-out')),
      transition('hide => show', animate('500ms ease-out'))
    ])
  ]
})
export class MenuBarComponent implements OnInit {

  state = 'hide';

  constructor(private el: ElementRef) { }
  laststop = 0;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    let st = window.pageYOffset;
    if (st > 70) {
      if (st > this.laststop) {
        this.state = 'hide'
      } else {
        this.state = 'show'
      }
      this.laststop = st
    } else {
      this.state = 'hide'
    }
  }


  ngOnInit() { }

}
