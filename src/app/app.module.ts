// ========MODULES============
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import * as config from './app.config';
import * as firebase from 'firebase';
import { MenuBarComponent } from './components/menu/menu-bar/menu-bar.component';
import { SideBarComponent } from './components/menu/side-bar/side-bar.component';
import { CarouselComponent } from './components/pages/home/carousel/carousel.component';
import { MenuComponent } from './components/menu/menu/menu.component';
import { ContactComponent } from './components/pages/home/contact/contact.component';
import { OurPharmacyComponent } from './pages/our-pharmacy/our-pharmacy.component';
import { PharmacyComponent } from './components/pages/home/pharmacy/pharmacy.component';
import { ServicesComponent } from './pages/services/services.component';
import { LongTermCareComponent } from './components/pages/services/long-term-care/long-term-care.component';
import { CompliancePackingComponent } from './components/pages/services/compliance-packing/compliance-packing.component';
import { CorporateAccountsComponent } from './components/pages/services/corporate-accounts/corporate-accounts.component';
import { ImmunizationComponent } from './components/pages/services/immunization/immunization.component';
import { DeliveryComponent } from './components/pages/services/delivery/delivery.component';
import { HospiceCareComponent } from './components/pages/services/hospice-care/hospice-care.component';
import { MedicareConsultationComponent } from './components/pages/services/medicare-consultation/medicare-consultation.component';
import { RemindersComponent } from './components/pages/services/reminders/reminders.component';
import { MedicationTherapyManagementComponent } from './components/pages/services/medication-therapy-management/medication-therapy-management.component'

firebase.initializeApp(config.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    SideBarComponent,
    CarouselComponent,
    MenuComponent,
    ContactComponent,
    OurPharmacyComponent,
    PharmacyComponent,
    ServicesComponent,
    LongTermCareComponent,
    CompliancePackingComponent,
    CorporateAccountsComponent,
    ImmunizationComponent,
    DeliveryComponent,
    HospiceCareComponent,
    MedicareConsultationComponent,
    RemindersComponent,
    MedicationTherapyManagementComponent


  ],
  imports: [
    AngularFireModule.initializeApp(config.firebaseConfig),
    BrowserModule.withServerTransition({appId: 'towne-wellness'}),
    HttpModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }