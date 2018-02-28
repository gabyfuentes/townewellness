import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { MedicareConsultationComponent } from './medicare-consultation.component';

const routes: Routes = [
    {path: '', component: MedicareConsultationComponent}
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes);