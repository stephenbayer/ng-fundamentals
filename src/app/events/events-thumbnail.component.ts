import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'events-thumbnail',
  template: `
    <div class="card bg-secondary hoverwell img-thumbnail">
      <h2>{{ event.name }}</h2>
      <div>Date: {{ event.date }}</div>
      <div>Time: {{ event.time }}</div>
      <div>Price: \${{ event.price }}</div>
      <div>
        <span>Location: {{ event.location.addresss }}</span>
        <span class="pad-left">{{ event.location.city }}, {{ event.location.country }}</span>
      </div>
      <div>
        {{ someProperty }}
      </div>
      <button class="btn btn-primary" (click)="handleClick()">Click Me</button>
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
  @Output() eventClick = new EventEmitter();

  someProperty = 'Some Property';

  handleClick() {
    this.eventClick.emit({event: this.event});
    console.log(this.event);
  }

  logFoo() {
    console.log('Foo Fighters !== Bar Fighters');
  }
}
