import { NgModule } from '@angular/core';
import { MedicationTherapyManagementComponent } from './medication-therapy-management.component';
import { routing } from './medication-therapy-management.routing';

@NgModule({
  imports: [
    routing
  ],
  declarations: [MedicationTherapyManagementComponent]
})
export class MedicationTherapyManagementModule { }
