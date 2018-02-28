import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospiceCareComponent } from './hospice-care.component'

const routes: Routes = [
    {path: '', component: HospiceCareComponent}
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);