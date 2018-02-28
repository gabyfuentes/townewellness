import { NgModule } from '@angular/core';
import { routing } from './team.routing';
import { TeamComponent } from './team.component';


@NgModule({
  imports: [
    routing
  ],
  declarations: [TeamComponent]
})
export class TeamModule { }
