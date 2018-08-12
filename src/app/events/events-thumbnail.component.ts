import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'events-thumbnail',
  template: `
    <div
      [routerLink]="['/events', event.id]"
      style="margin-bottom: 10px; height: 250px; overflow: auto;"
      class="card bg-secondary hoverwell img-thumbnail">
      <div style="float: left; width: 100px; height: 100px; position: absolute;">
        <img style="width: 100%;" [src]="event?.imageUrl" />
      </div>
      <div style="margin-left: 120px;">
        <h2>{{ event?.name }}</h2>
        <div>Date: {{ event?.date }}</div>
        <div>Time: {{ event?.time }}</div>
        <div>Price: \${{ event?.price }}</div>
        <div *ngIf="event?.location">
          <span>Location: {{ event?.location?.address }}</span>
          <span class="pad-left">{{ event?.location?.city }}, {{ event?.location?.country }}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
          <span>Url: {{ event?.onlineUrl }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .pad-left {
      padding-left: 10px;
    }
    .card div {
      color: #bbb;
    }
  `]
})
export class EventsThumbnailComponent {
  @Input() event;
}
