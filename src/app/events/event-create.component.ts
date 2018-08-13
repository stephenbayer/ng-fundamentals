import { Input, Component} from '@angular/core';
import {Router} from '@angular/router';
import {EventsService} from './events.service';

@Component({
  templateUrl: './event-create.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3A3A5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :-ms-input-placeholder { color: #999; }
  `]
})
export class EventCreateComponent {
  constructor(
    private router: Router,
    private eventService: EventsService
  ) { }
  @Input() isDirty = true;

  newEvent;

  cancelCreate() {
    this.router.navigate(['/events']);
  }
  saveEvent(formValues) {
    console.log(this.newEvent);
    console.log(formValues);
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
  }
}
