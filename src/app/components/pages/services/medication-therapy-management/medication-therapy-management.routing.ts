import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { MedicationTherapyManagementComponent } from './medication-therapy-management.component';


const routes: Routes = [
    {path: '', component: MedicationTherapyManagementComponent}
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);