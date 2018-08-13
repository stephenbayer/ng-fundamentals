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
import {NavbarComponent} from './nav';
import {ToastService} from './common/toast.service';
import {RouterModule} from '@angular/router';
import {AppRoutes, checkFormIsNotDirtyOrConfirm} from './routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Error404Component} from './errors/error404.component';
import {AuthService} from './user/auth.service';
import {Error401Component} from './errors/error401.component';
import {CreateSessionComponent} from './events/create-session.component';

@NgModule({
  declarations: [
    Error401Component,
    Error404Component,
    NavbarComponent,
    EventsListComponent,
    EventsAppComponent,
    EventsThumbnailComponent,
    EventDetailComponent,
    EventCreateComponent,
    CreateSessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    EventsService,
    ToastService,
    EventRouteActivatorService,
    { provide: 'checkFormIsNotDirtyOrConfirm', useValue: checkFormIsNotDirtyOrConfirm},
    EventsListResolverService,
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
