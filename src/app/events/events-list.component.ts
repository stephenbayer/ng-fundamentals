import {Component, OnInit} from '@angular/core';
import {EventsService} from './events.service';
import {ToastService} from '../common/toast.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from './models/event.model';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent
  implements OnInit {
  events: IEvent[];
  constructor(
    private eventsService: EventsService,
    private toastService: ToastService,
    private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(evt) {
    this.toastService.success(evt.name);
  }
}
