import {Injectable} from '@angular/core';

@Injectable()
export class EventsService {
  events = [
    {
      id: 1,
      name: 'Angular Connect It',
      date: '09/26/2016',
      time: '10:00 am',
      price: 599.99,
      imageUrl: '/assets/images/angularconnect-shield.png',
      location: {
        address: '1057 DT',
        city: 'London',
        country: 'England'
      }
    },
    {
      id: 2,
      name: 'Online Angular Conference',
      date: '10/16/2016',
      time: '3:00 pm',
      price: 109.58,
      imageUrl: '/assets/images/basic-shield.png',
      onlineUrl: 'http://www.google.com'
    },
    {
      id: 3,
      name: 'Angular? Oui!',
      date: '06/06/2016',
      time: '11:00 pm',
      price: 69.69,
      imageUrl: '/assets/images/ng-conf.png',
      location: {
        address: '69 Rue S. Cargo',
        city: 'Paris',
        country: 'France'
      },
      onlineUrl: 'http://angular.fr'
    },
    {
      id: 4,
      name: 'Big Gay Angular Party',
      date: '06/06/2016',
      time: '11:00 pm',
      price: 69.69,
      imageUrl: '/assets/images/ng-nl.png',
      location: {
        address: '1141 Folsom',
        city: 'San Francisco, CA',
        country: 'USA'
      }
    },
    {
      id: 5,
      name: 'Angular Gambler',
      date: '06/06/2016',
      time: '11:00 pm',
      price: 69.69,
      imageUrl: '/assets/images/ng-vegas.png',
      location: {
        address: '777 Vegas Baby Blvd',
        city: 'Los Vegas, NV',
        country: 'USA'
      }
    }
  ];

  getEvents() {
    return this.events;
  }
}
