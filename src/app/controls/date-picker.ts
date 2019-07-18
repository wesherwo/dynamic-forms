import { ControlBase } from './control-base';

export class DatePicker extends ControlBase<string> {
  controlType = 'datepicker';

  constructor(options: {} = {}) {
    super(options);
  }

  update(newValue){
    this.value = newValue.value;
  }

}