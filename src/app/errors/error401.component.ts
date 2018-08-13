import { Component } from '@angular/core';

@Component({
  template: `
    <h1 class="errorMessage">Not Authorized</h1>
  `,
  styles: [`
    .errorMessage {
      margin-top:150px;
      font-size: 170px;
      text-align: center;
    }`]
})
export class Error401Component {
  constructor() {

  }
}
