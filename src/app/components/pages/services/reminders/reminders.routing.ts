import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { RemindersComponent } from './reminders.component';

const routes: Routes = [
    {path: '', component: RemindersComponent}
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);