import { Component, OnInit, HostListener } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) { 
    title.setTitle('Towne Pharmacy - Independent Pharmacy in Cedar Knolls, NJ');
    meta.addTags([
      { name: 'author', content: 'Towne Pharmacy'},
      { name: 'keywords', content: 'Pharmacy, Cedar Knolls, 07927, New Jersey, NJ, Township of Hanover, Whippany, Randolph, Parsippany, Morristown, Florham Park, Morris Plains, Madison, Chatam, Livingston'},
      { name: 'description', content: 'Traditional Retail Pharmacy serves Long Term Care Medicine, Nursing Homes, adult day care centers, hospice facilities, Compounding Medicine, Pet Medicine in Cedar Knolls NJ.'}
    ])
  }

  ngOnInit() {

  }

  

}
