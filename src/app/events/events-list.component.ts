import {Component, OnInit} from '@angular/core';
import {EventsService} from './events.service';
import {ToastService} from '../common/toast.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})
export class EventsListComponent
  implements OnInit {
  events: any;
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
