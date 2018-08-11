import {Component, OnInit} from '@angular/core';
import {EventsService} from './events.service';
import {ToastService} from '../common/toast.service';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent
  implements OnInit {
  events: any[];
  constructor(private eventsService: EventsService, private toastService: ToastService) {  }

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }

  handleThumbnailClick(evt) {
    this.toastService.success(evt.name);
  }
}
