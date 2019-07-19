import { Component, Input, Output, EventEmitter }  from '@angular/core';
import { ControlBase } from 'src/app/controls/control-base';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent {

  @Input() controls: ControlBase<any>[] = [];
  @Input() buttonText:string;
  @Output() result = new EventEmitter();

  constructor() {  }

  allValid(){
    for(var i = 0; i < this.controls.length; i++){
      if(!this.controls[i].isValid()){
        return false;
      }
    }
    return true;
  }

  onSubmit() {
    let payLoad = "{";
    for(var i = 0; i < this.controls.length; i++){
      payLoad += "\"" + this.controls[i].key + "\":\"";
      if(this.controls[i].getValue() != undefined){
        payLoad += this.controls[i].getValue() + "\"";
      } else {
        payLoad += "\"\"";
      }
      if(i < this.controls.length - 1){
        payLoad += ",";
      }
    }
    payLoad += "}";
    this.result.emit(payLoad);
  }

}
