import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, RoutesRecognized} from '@angular/router';
import { ContactUsComponent } from './contact-us.component'

const routes: Routes = [
    { path: '', component: ContactUsComponent}
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);