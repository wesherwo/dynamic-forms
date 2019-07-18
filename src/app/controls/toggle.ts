import { ControlBase } from './control-base';

export class Toggle extends ControlBase<string> {
  controlType = 'toggle';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.value = options['value'] || false;
  }

  update(newValue){
    this.value = newValue.checked;
  }

  isValid(){
    return super.isValid();
  }
}