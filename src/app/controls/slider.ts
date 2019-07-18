import { ControlBase } from './control-base';

export class Slider extends ControlBase<string> {
  controlType = 'slider';
  min:number;
  max:number;
  step:number;
  tickInterval:number;
  thumbLabel:boolean

  constructor(options: {} = {}) {
    super(options);
    this.min = options['min'] || 0;
    this.max = options['max'] || 100;
    this.step = options['step'] || 1;
    this.tickInterval = options['tickInterval'] || 1;
    this.thumbLabel = options['thumbLabel'] || false;
  }

  update(newValue){
    this.value = newValue.value;
  }
  
}
