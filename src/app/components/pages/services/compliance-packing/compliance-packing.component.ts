import { Component, OnInit, PLATFORM_ID, Inject, HostListener} from '@angular/core';
import { isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-compliance-packing',
  templateUrl: './compliance-packing.component.html',
  styleUrls: ['./compliance-packing.component.css']
})
export class CompliancePackingComponent implements OnInit {


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    
  }

  
  ngOnInit() {

  }

}
