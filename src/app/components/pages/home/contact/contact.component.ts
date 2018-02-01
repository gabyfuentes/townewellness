import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {trigger, animate, style, transition, query, state } from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('col-1', [
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
    trigger('col-2', [
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
    trigger('col-3', [
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
export class ContactComponent implements OnInit {
animate = 'hide';

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onscroll(){
    const scrollPosition = window.pageYOffset
    if(scrollPosition > 200){
      this.animate = 'show'
    }else{
      this.animate = 'hide'
    }
  }

  ngOnInit() {
    
  }

}
