import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './contact-us.routing';
import { ContactUsComponent } from './contact-us.component';


@NgModule({
  imports: [
    routing,
    FormsModule
  ],
  declarations: [ContactUsComponent]
})
export class ContactUsModule { }
