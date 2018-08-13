import {Component, OnInit} from '@angular/core';
import {EventsService} from './events.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from './models/event.model';

@Component({
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute
  ) { }
  event: IEvent;
  eventId: number;
  ngOnInit(): void {
    console.log(this.route);
    this.eventId = parseInt(this.route.snapshot.params.id, 10);
    this.event = this.eventsService.getEvent(this.eventId);
  }
}
