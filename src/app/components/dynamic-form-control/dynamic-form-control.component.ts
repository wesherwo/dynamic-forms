import { Component, Input } from '@angular/core';
import { ControlBase } from 'src/app/controls/control-base';

@Component({
  selector: 'control',
  templateUrl: './dynamic-form-control.component.html',
})
export class DynamicFormControlComponent {
  @Input() control: ControlBase<any>;
}
