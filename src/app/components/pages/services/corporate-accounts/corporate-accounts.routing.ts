import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CorporateAccountsComponent } from './corporate-accounts.component';

const routes: Routes = [
    {path: '', component: CorporateAccountsComponent}
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes)