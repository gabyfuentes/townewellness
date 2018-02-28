import { Component, Renderer, EventEmitter, ElementRef, OnInit } from '@angular/core';
import { trigger, transition, state, style, animate, query, group } from '@angular/animations';
import { Meta, Title } from '@angular/platform-browser'

@Component({
  selector: 'app-our-pharmacy',
  templateUrl: './our-pharmacy.component.html',
  styleUrls: ['./our-pharmacy.component.css'],
  animations: [
    trigger('animateRowOne', [
      transition('* => show', [
        query('.imgBack', style({ opacity: 0 })),
        query('h1', style({ opacity: 0, transform: 'translateX(5%)' })),
        query('.imgBack', animate(1000, style({ opacity: 1 }))),
        query('h1', animate('1s 0.3s ease-out', style({ opacity: 1, transform: 'translateX(0)' })), ),
      ])
    ])
  ]
})
export class OurPharmacyComponent implements OnInit {

  animate = ''
  constructor(
    private el: ElementRef,
    private renderer: Renderer,
    private meta: Meta,
    private title: Title
  ) {
    title.setTitle('Towne Pharmacy - A Cedar Knolls Independent Pharmacy')
    meta.addTags([
      { name: 'author', content: 'Towne-Pharmacy'},
      { name: 'keywords', content: 'New Jersey Pharmacy, NJ Pharmacy, Cedar Knolls Pharmacy, Pharmacy in Cedar Knolls, Independent Pharmacy, Pharmacy near us, 07927 Pharmacy, community pharmacy,local community pharmacy'},
      { name: 'description', content: 'A client and wellness centered pharmacy serving Cedar Knolls, New Jersey since 1973'}
    ])
  }

  ngOnInit() {
    this.animate = 'show';
    // console.log(this.el.nativeElement.children[2])
  }

}
