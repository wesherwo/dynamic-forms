export class ControlBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  inLine: boolean;
  errorMessage: string;
  disabled: boolean;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string,
    inLine?: boolean,
    errorMessage?: string,
    disabled?: boolean
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.inLine = options.inLine || false;
    this.errorMessage = options.errorMessage || this.label + " is required";
    this.disabled = options.disabled || false;
  }

  setValue(newvalue) {
    this.value = newvalue;
  }
  getValue() {
    return this.value;
  }
  isValid() {
    return !this.required || this.value != undefined;
  }
}
