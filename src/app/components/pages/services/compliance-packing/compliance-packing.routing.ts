import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CompliancePackingComponent } from './compliance-packing.component'

const routes: Routes = [
    {path: '', component: CompliancePackingComponent}
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes)