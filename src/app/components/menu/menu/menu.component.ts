import { Component, HostListener, ElementRef, OnInit, Attribute } from '@angular/core';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { animate, trigger, style, state, transition, stagger, query } from "@angular/animations";
import { AbstractEmitterVisitor } from '@angular/compiler/src/output/abstract_emitter';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('menuAnimation', [
      transition('*=>*', [
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

  menu = [
    'home',
    'our pharmacy',
    'services'
  ]
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

}
