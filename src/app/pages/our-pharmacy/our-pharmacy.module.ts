import { NgModule } from '@angular/core';
import { routing } from "./our-pharmacy.routing";
import { OurPharmacyComponent } from './our-pharmacy.component';

@NgModule({
  imports: [routing],
  declarations: [OurPharmacyComponent]
})
export class OurPharmacyModule { }
