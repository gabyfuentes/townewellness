import { NgModule } from '@angular/core';
import { HospiceCareComponent } from './hospice-care.component';
import { routing } from './hospice-care.routing'

@NgModule({
  imports: [
    routing
  ],
  declarations: [HospiceCareComponent]
})
export class HospiceCareModule { }
