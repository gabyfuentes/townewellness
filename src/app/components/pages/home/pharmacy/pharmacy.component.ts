import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { animate, trigger, query, style, transition, state, animateChild } from '@angular/animations';
import { stagger } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css'],
  animations: [
    trigger('box', [
      state('show', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateY(20%)'
      })),
      transition('hide=>show', animate('0.5s ease-out')),
      transition('show=>hide', animate('1.7s ease-out'))
    ]),
    trigger('h2', [
      state('show', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateY(20%)'
      })),
      transition('hide=>show', animate('0.9s 600ms ease-out')),
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
      transition('hide=>show', animate('1.2s 600ms ease-out')),
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

  animate = 'hide';
  constructor(private el: ElementRef) { }
  @HostListener('window:scroll', ['$event'])

  onscroll() {
    let scrollPosition = window.pageYOffset;
    if (scrollPosition > screen.height) {
      this.animate = 'show';
    } else {
      this.animate = 'hide';
    }

  }
  ngOnInit() { 
  }
}