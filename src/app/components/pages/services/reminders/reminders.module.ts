import { NgModule } from '@angular/core';
import { RemindersComponent } from './reminders.component';
import { routing } from './reminders.routing';


@NgModule({
  imports: [
    routing
  ],
  declarations: [RemindersComponent]
})
export class RemindersModule { }
