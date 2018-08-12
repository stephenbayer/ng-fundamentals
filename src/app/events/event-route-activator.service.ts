import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {EventsService} from './events.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {
  constructor(
    private eventsService: EventsService,
    private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const id = +route.params.id;
    const eventExists = !!this.eventsService.getEvent(id);

    if (!eventExists) {
      this.router.navigate(['/error/404']);
    }

    return eventExists;
  }
}
