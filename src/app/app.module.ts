// ========MODULES============
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
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
import { PharmacyComponent } from './components/pages/home/pharmacy/pharmacy.component';
import { DeliveryComponent } from './components/pages/services/delivery/delivery.component';
import { FooterComponent } from './components/menu/footer/footer.component';

import { HomeServiceComponent } from './components/pages/home/home-service/home-service.component';


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
    PharmacyComponent,
    DeliveryComponent,
    FooterComponent,
    HomeServiceComponent 
  ],
  imports: [
    AngularFireModule.initializeApp(config.firebaseConfig),
    BrowserModule.withServerTransition({appId: 'towne-wellness'}),
    FormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }