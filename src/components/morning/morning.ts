import { Component } from '@angular/core';

/**
 * Generated class for the MorningComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'morning',
  templateUrl: 'morning.html'
})
export class MorningComponent {

  text: string;

  constructor() {
    console.log('Hello MorningComponent Component');
    this.text = 'Hello World';
  }

}
