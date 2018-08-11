import {Component, OnInit} from '@angular/core';
import {EventsService} from './events.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './event-detail.component.html',
  styles: [`
    .container {
      padding-left: 20px;
      padding-right: 20px;
    }
    .event-image {
      height: 100px;
    }
  `]
})
export class EventDetailComponent implements OnInit {
  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute
  ) { }
  event: any;
  eventId: number;
  ngOnInit(): void {
    console.log(this.route);
    this.eventId = parseInt(this.route.snapshot.params.id);
    this.event = this.eventsService.getEvent(this.eventId);
  }
}
