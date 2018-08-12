import {Routes} from '@angular/router';
import {ProfileComponent} from './profile.component';


export const userRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'profile'},
  { path: 'profile', component: ProfileComponent }
];
