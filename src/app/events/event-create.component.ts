import { Input, Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  template: `
    <h1>New Event</h1>
    <hr />
    <div class="col-md-6">
      <h3>[Create Event Form will go here]</h3>
      <br />
      <input [(ngModel)]="isDirty" type="checkbox" /> {{ isDirty }}
      <br />
      <button type="submit" class="btn btn-primary">Save</button>
      <button type="button" class="btn btn-default" (click)="cancelCreate()">Cancel</button>
    </div>
  `
})
export class EventCreateComponent {
  constructor(private router: Router) { }
  @Input() isDirty: boolean;
  cancelCreate() {
    this.router.navigate(['/events']);
  }
}
