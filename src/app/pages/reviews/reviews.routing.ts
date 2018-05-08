import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewsComponent } from './reviews.component';

const routes: Routes = [
    { path: '', component: ReviewsComponent}
]
export const routing: ModuleWithProviders = RouterModule.forChild(routes); 
