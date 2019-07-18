import { ControlBase } from './control-base';

export class Radio extends ControlBase<string> {
  controlType = 'radio';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }

  update(newValue){
    this.value = newValue.value;
  }
  
}
