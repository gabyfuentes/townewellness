import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImmunizationComponent } from './immunization.component';

const routes: Routes = [
    {path: '', component: ImmunizationComponent}
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes)