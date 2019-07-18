import { ControlBase } from './control-base';

export class Dropdown extends ControlBase<string> {
  controlType = 'dropdown';
  options: {key: string, value: string}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }

  update(newValue){
    this.value = newValue.value;
  }

}
