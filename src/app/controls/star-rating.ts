import { ControlBase } from './control-base';

export class StarRating extends ControlBase<string> {
  controlType = 'starRating';
  starType: string;
  rating: string;
  value;

  constructor(options: {} = {}) {
    super(options);
    this.starType = options['starType'] || '';
    this.rating = options['rating'] || 0;
    this.value = options['rating'] || 0;
  }

  update($event) {
    this.rating = $event.rating;
    this.value = this.rating;
  }

}