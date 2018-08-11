import {EventsListComponent} from './events/events-list.component';
import {EventDetailComponent} from './events/event-detail.component';
import {Routes} from '@angular/router';
import {EventCreateComponent} from './events/event-create.component';

export const AppRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: EventCreateComponent},
  { path: 'events/:id', component: EventDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'events' }
];
