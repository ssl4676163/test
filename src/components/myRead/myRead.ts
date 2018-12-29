import { Component } from '@angular/core';

/**
 * Generated class for the MorningComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'myRead',
  templateUrl: 'myRead.html'
})
export class myReadComponent {

  text: string;

  constructor() {
    console.log('Hello myReadComponent Component');
    this.text = 'Hello World';
  }

}
