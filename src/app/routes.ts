import {
  EventsListComponent,
  EventDetailComponent,
  EventCreateComponent,
  EventRouteActivatorService,
  EventsListResolverService,
  CreateSessionComponent
} from './events';

import {
  Error401Component,
  Error404Component
} from './errors';

import {Routes} from '@angular/router';

export const AppRoutes: Routes = [
  { path: 'user', loadChildren: './user/user.module#UserModule'},
  { path: 'error/401', component: Error401Component },
  { path: 'error/404', component: Error404Component },
  { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolverService }},
  { path: 'events/new', component: EventCreateComponent, canDeactivate: ['checkFormIsNotDirtyOrConfirm']},
  { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivatorService]},
  { path: 'events/:id/sessions/new', component: CreateSessionComponent, canActivate: [EventRouteActivatorService]},
  { path: '', pathMatch: 'full', redirectTo: 'events' }
];

export function checkFormIsNotDirtyOrConfirm(formComponent: any) {
  console.log(formComponent);
  return !formComponent.isDirty || window.confirm('Are you sure you want to leave?');
}
