import {Component} from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '09/26/2016',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      addresss: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };
  handleEventClicked(clickEvent) {
    console.log('event Clicked handled in list');
    console.log(clickEvent);
  }
}
