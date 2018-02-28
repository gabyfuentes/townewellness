import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { routing } from './instagram.routing'
import { InstagramComponent } from './instagram.component';
import { InstagramService } from './instagram.service';
import {Instagram} from './instagram';


@NgModule({
    declarations:[InstagramComponent],
    imports:[routing, HttpModule, JsonpModule, CommonModule],
    providers:[InstagramService]
})

export class InstagramModule{}