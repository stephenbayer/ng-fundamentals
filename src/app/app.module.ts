import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import {
  EventsListComponent,
  EventsThumbnailComponent,
  EventsService,
  EventDetailComponent,
  EventCreateComponent,
  EventRouteActivatorService,
  EventsListResolverService
} from './events';
import {NavbarComponent} from './nav/navbar.component';
import {ToastService} from './common/toast.service';
import {RouterModule} from '@angular/router';
import {AppRoutes, checkFormIsNotDirtyOrConfirm} from './routes';
import {FormsModule} from '@angular/forms';
import {Error404Component} from './errors/error404.component';

@NgModule({
  declarations: [
    Error404Component,
    NavbarComponent,
    EventsListComponent,
    EventsAppComponent,
    EventsThumbnailComponent,
    EventDetailComponent,
    EventCreateComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    EventsService,
    ToastService,
    EventRouteActivatorService,
    { provide: 'checkFormIsNotDirtyOrConfirm', useValue: checkFormIsNotDirtyOrConfirm},
    EventsListResolverService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
