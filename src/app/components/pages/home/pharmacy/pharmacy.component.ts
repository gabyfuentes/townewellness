import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { animate, trigger, query, style, transition, state}from '@angular/animations';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css'],
  animations: [
    trigger('h2', [
      state('show', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateY(20%)'
      })),
      transition('hide=>show', animate('0.5s ease-out')),
      transition('show=>hide', animate('1.2s ease-out'))
    ]),
    trigger('p', [
      state('show', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateY(20%)'
      })),
      transition('hide=>show', animate('0.9s ease-out')),
      transition('show=>hide', animate('0.9s ease-out'))
    ]),
    trigger('button', [
      state('show', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateY(20%)'
      })),
      transition('hide=>show', animate('1.2s ease-out')),
      transition('show=>hide', animate('0.5s ease-out'))
    ]),
  ]  
})
export class PharmacyComponent implements OnInit {

  animate = 'hide'
  constructor(private el: ElementRef) {}
  @HostListener('window:scroll', ['$event'] )
    onscroll(){
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset
      console.log(componentPosition)
      if(scrollPosition > 500){
        this.animate = 'show'
      } else {
        this.animate = 'hide'
      }
    }

  ngOnInit() {

  }

}
