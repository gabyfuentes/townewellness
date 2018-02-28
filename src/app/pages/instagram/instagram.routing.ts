import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstagramComponent } from "./instagram.component";

const routes: Routes = [
    {path:'', component: InstagramComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);