import {Injectable} from '@angular/core';
import {IEvent} from './models/event.model';
import {Subject} from 'rxjs';

@Injectable()
export class EventsService {
  events: IEvent[] = [
    {
      id: 1,
      name: 'Angular Connect It',
      date: new Date(),
      time: '10:00 am',
      price: 599.99,
      imageUrl: '/assets/images/angularconnect-shield.png',
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England'
      },
      sessions: []
    },
    {
      id: 2,
      name: 'Online Angular Conference',
      date: new Date(),
      time: '3:00 pm',
      price: 109.58,
      imageUrl: '/assets/images/basic-shield.png',
      onlineUrl: 'http://www.google.com',
      sessions: []
    },
    {
      id: 3,
      name: 'Angular? Oui!',
      date: new Date(),
      time: '11:00 pm',
      price: 69.69,
      imageUrl: '/assets/images/ng-conf.png',
      location: {
        address: '69 Rue S. Cargo',
        city: 'Paris',
        country: 'France'
      },
      onlineUrl: 'http://angular.fr',
      sessions: []
    },
    {
      id: 4,
      name: 'Big Gay Angular Party',
      date: new Date(),
      time: '11:00 pm',
      price: 69.69,
      imageUrl: '/assets/images/ng-nl.png',
      location: {
        address: '1141 Folsom',
        city: 'San Francisco, CA',
        country: 'USA'
      },
      sessions: []
    },
    {
      id: 5,
      name: 'Angular Gambler',
      date: new Date(),
      time: '11:00 pm',
      price: 69.69,
      imageUrl: '/assets/images/ng-vegas.png',
      location: {
        address: '777 Vegas Baby Blvd',
        city: 'Los Vegas, NV',
        country: 'USA'
      },
      sessions: []
    }
  ];

  getEvents(): Subject<IEvent[]> {
    const subject = new Subject<IEvent[]>();
    setTimeout(
      () => {
        subject.next(this.events);
        subject.complete();
      }, 2000);
    return subject;
  }

  getEvent(id: number): IEvent {
    const event = this.events.find( e => e.id === id);
    console.log(event);
    return event;
  }

  private getMaxId(): number {
    let maxId = 0;
    for (let index = 0; index < this.events.length; index++) {
      maxId = this.events[index].id > maxId ? this.events[index].id : maxId;
    }
    return maxId;
  }

  saveEvent(event: IEvent): void {
    event.id = this.getMaxId() + 1;
    this.events.push(event);
  }
}
