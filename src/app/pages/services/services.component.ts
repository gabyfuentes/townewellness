import { Component, OnInit } from '@angular/core';
import { Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    title.setTitle('Towne Pharmacy offers Retail, Compounding and Long Term Medicine.');
    meta.addTags([
      { name: 'name', content: 'Towne Pharmacy'},
      { name: 'keywords', content: 'Pet Medicine, Blistering Packaging, Long term care pharmacy, Hospice pharmacy services, single dose, multi-dose blistering packages, bubble packaging'},
      { name: 'description', content: 'Traditional Retail Pharmacy, Long Term Care Medicine, Nursing Homes, Adult Day Care Centers, Hospice Patients, Compounding Medicine, Pet Medicine in Cedar Knolls NJ.'}
    ])
   }

  ngOnInit() {
  }

}
