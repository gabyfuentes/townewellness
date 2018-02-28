import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  {  path: 'our-pharmacy', loadChildren: 'app/pages/our-pharmacy/our-pharmacy.module#OurPharmacyModule'},
  { path: 'services', loadChildren: 'app/pages/services/services.module#ServicesModule'},
  { path: 'contact-us', loadChildren: 'app/pages/contact-us/contact-us.module#ContactUsModule'},
  { path: 'team', loadChildren: 'app/pages/team/team.module#TeamModule' },
  { path: 'compliance-packing', loadChildren: 'app/components/pages/services/compliance-packing/compliance-packing.module#CompliancePackingModule'},
  { path: 'corporate-accounts', loadChildren: 'app/components/pages/services/corporate-accounts/corporate-accounts.module#CorporateAccountModule'},
  { path: 'hospice-care', loadChildren: 'app/components/pages/services/hospice-care/hospice-care.module#HospiceCareModule'},
  { path: 'immunization', loadChildren: 'app/components/pages/services/immunization/immunization.module#ImmunizationModule'},
  { path: 'long-term-care', loadChildren: 'app/components/pages/services/long-term-care/long-term-care.module#LongTermCareModule'},
  { path: 'medicare-consultation', loadChildren: 'app/components/pages/services/medicare-consultation/medicare-consultation.module#MedicareConsultationModule'},
  { path: 'medication-therapy-management', loadChildren: 'app/components/pages/services/medication-therapy-management/medication-therapy-management.module#MedicationTherapyManagementModule'},
  { path: 'medication-reminders', loadChildren: 'app/components/pages/services/reminders/reminders.module#RemindersModule'},
  { path: 'instagram', loadChildren: 'app/pages/instagram/instagram.module#InstagramModule'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {}