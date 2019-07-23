import { ControlBase } from './control-base';

export class Textbox extends ControlBase<string> {
  controlType = 'textbox';

  constructor(options: {} = {}) {
    super(options);
    this.value = options['value'] || '';
  }

  update(newValue) {
    this.value = newValue.target.value;
  }

  isValid() {
    if (super.isValid())
      return true;
    return this.value != undefined && this.value.length > 0;
  }
}
