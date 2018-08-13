import {Routes} from '@angular/router';
import {ProfileComponent} from './profile.component';
import {LoginComponent} from './login.component';
import {ProfileRouteActivatorService} from './profile-route-activator.service';


export const userRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'profile'},
  { path: 'profile', component: ProfileComponent, canActivate: [ProfileRouteActivatorService]},
  { path: 'login', component: LoginComponent }
];
