import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OurPharmacyComponent } from './pages/our-pharmacy/our-pharmacy.component';
import { ServicesComponent } from './pages/services/services.component'



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'our-pharmacy', component: OurPharmacyComponent},
  { path: 'services', component: ServicesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {}
