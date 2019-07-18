import { ControlBase } from './control-base';

export class Checkbox extends ControlBase<string> {
  controlType = 'checkbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
  }

  update(newValue){
    this.value = newValue.checked;
  }

  isValid(){
    return super.isValid();
  }
}
