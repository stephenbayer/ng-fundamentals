import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable()
export class ProfileRouteActivatorService implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const userExists = !!this.authService.currentUser;

    if (!userExists) {
      this.router.navigate(['/error/401']);
    }

    return userExists;
  }
}
