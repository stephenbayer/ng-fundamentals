import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {EventsService} from './events.service';
import {map} from 'rxjs/operators';
import {IEvent} from './models/event.model';

@Injectable()
export class EventsListResolverService implements Resolve<any> {
  constructor(private eventsService: EventsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.eventsService.getEvents().pipe(map(events => events));
  }
}
