import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LongTermCareComponent } from "./long-term-care.component";

const routes: Routes = [
    {path:'', component: LongTermCareComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);