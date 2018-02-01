import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, style, animate, query, group } from '@angular/animations';

@Component({
  selector: 'app-our-pharmacy',
  templateUrl: './our-pharmacy.component.html',
  styleUrls: ['./our-pharmacy.component.css'],
  animations: [
    trigger('animateRowOne', [
      transition('* => show', [
        query('.imgBack', style({opacity: 0})),
        query('h1', style({opacity: 0, transform: 'translateX(5%)'})),
        query('.imgBack', animate(1000, style({opacity: 1}))),
        query('h1', animate('1s 0.3s ease-out', style({opacity: 1, transform: 'translateX(0)'})), ),
      ])
    ])
  ]
})
export class OurPharmacyComponent implements OnInit {

  animate = ''
  constructor() { }

  ngOnInit() {
    this.animate = 'show'
  }

}
