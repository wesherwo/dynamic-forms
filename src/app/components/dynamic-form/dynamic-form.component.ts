import { Component, Input }  from '@angular/core';
import { ControlBase } from 'src/app/controls/control-base';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html'
})
export class DynamicFormComponent {

  @Input() controls: ControlBase<any>[] = [];
  @Input() buttonText:string;
  payLoad = '';

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
    this.payLoad = "{";
    for(var i = 0; i < this.controls.length; i++){
      this.payLoad += "\"" + this.controls[i].key + "\":\"";
      if(this.controls[i].getValue() != undefined){
        this.payLoad += this.controls[i].getValue() + "\"";
      } else {
        this.payLoad += "\"\"";
      }
      if(i < this.controls.length - 1){
        this.payLoad += ",";
      }
    }
    this.payLoad += "}";
  }

}
