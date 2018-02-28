import { NgModule } from '@angular/core';
import { routing } from './services.routing';
import { ServicesComponent } from './services.component';
import { SlideshowComponent } from '../../components/pages/services/slideshow/slideshow.component'

@NgModule({
    imports:[routing],
    declarations:[
        ServicesComponent, 
        SlideshowComponent
    ]
})
export class ServicesModule{}