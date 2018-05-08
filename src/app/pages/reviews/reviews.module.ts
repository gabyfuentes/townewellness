import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from './reviews.component';
import { routing } from './reviews.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ReviewsComponent]
})
export class ReviewsModule { }
