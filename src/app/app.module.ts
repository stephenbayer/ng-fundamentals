import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import {EventsListComponent} from './events/events-list.component';
import {EventsThumbnailComponent} from './events/events-thumbnail.component';
import {NavbarComponent} from './nav/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    EventsListComponent,
    EventsAppComponent,
    EventsThumbnailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
