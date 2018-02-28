import { Component, OnInit, HostListener, ElementRef, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { animate, trigger, style, state, transition, stagger, query, animateChild } from "@angular/animations";
declare var $: any;

@Component({
  selector: 'app-home-service',
  templateUrl: './home-service.component.html',
  styleUrls: ['./home-service.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition('hide => show', [
        query('.grid-item', style({
          transform: 'translateY(20%)',
          opacity: 0
        })),
        query('.grid-item',
          stagger('500ms', [
            animate('0.3s ease-out', style({
              transform: 'translateY(0)',
              opacity: 1
            }))
          ])),
      ]),
      transition('show=>hide', [
        query('.grid-item', style({
          transform: 'translateY(0)',
          opacity: 1
        })),
        query('.grid-item',
          stagger('500ms', [
            animate('0.3s ease-out', style({
              transform: 'translateY(20%)',
              opacity: 0
            }))
          ])),
      ]),
    ])
  ]
})
export class HomeServiceComponent implements OnInit {

  animate = 'hide'
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private el: ElementRef) { }
  @HostListener('window:scroll', ['$event'])

  onscroll() {
    if (isPlatformBrowser(this.platformId)) {
      const scrollPosition = window.pageYOffset
      const height = this.el.nativeElement.offsetTop - screen.height;
      if (scrollPosition > height) {
        this.animate = 'show'
      } else {
        this.animate = 'hide'
      }
    }
  }



  ngOnInit() { }

}
