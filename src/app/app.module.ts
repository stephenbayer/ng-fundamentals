import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import {EventsListComponent} from './events/events-list.component';
import {EventsThumbnailComponent} from './events/events-thumbnail.component';
import {NavbarComponent} from './nav/navbar.component';
import {EventsService} from './events/events.service';
import {ToastService} from './common/toast.service';
import {EventDetailComponent} from './events/event-detail.component';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './routes';
import {EventCreateComponent} from './events/event-create.component';

@NgModule({
  declarations: [
    NavbarComponent,
    EventsListComponent,
    EventsAppComponent,
    EventsThumbnailComponent,
    EventDetailComponent,
    EventCreateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [EventsService, ToastService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
