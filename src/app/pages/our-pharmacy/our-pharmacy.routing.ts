import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurPharmacyComponent } from "./our-pharmacy.component";

const routes: Routes = [
    {path:'', component: OurPharmacyComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);