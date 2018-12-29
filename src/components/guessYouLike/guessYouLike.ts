import { Component } from '@angular/core';

/**
 * Generated class for the MorningComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'guessYouLike',
  templateUrl: 'guessYouLike.html'
})
export class GuessYouLikeComponent {

  text: string;

  constructor() {
    console.log('Hello guessYouLikeComponent Component');
    this.text = 'Hello World';
  }

}
