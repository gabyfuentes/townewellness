import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './immunization.routing';
import { ImmunizationComponent } from './immunization.component'

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ImmunizationComponent]
})
export class ImmunizationModule { }
