import {EventsListComponent} from './events/events-list.component';
import {EventDetailComponent} from './events/event-detail.component';
import {Routes} from '@angular/router';
import {EventCreateComponent} from './events/event-create.component';
import {Error404Component} from './errors/error404.component';
import {EventRouteActivatorService} from './events/event-route-activator.service';
import {EventsListResolverService} from './events/events-list-resolver.service';

export const AppRoutes: Routes = [
  { path: 'user', loadChildren: './user/user.module#UserModule'},
  { path: 'error/404', component: Error404Component },
  { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolverService }},
  { path: 'events/new', component: EventCreateComponent, canDeactivate: ['checkFormIsNotDirtyOrConfirm']},
  { path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivatorService]},
  { path: '', pathMatch: 'full', redirectTo: 'events' }
];

export function checkFormIsNotDirtyOrConfirm(formComponent: any) {
  console.log(formComponent);
  return !formComponent.isDirty || window.confirm('Are you sure you want to leave?');
}
