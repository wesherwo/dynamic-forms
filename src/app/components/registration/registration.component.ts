import { Component }       from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import jsonData from 'src/assets/controls.json';


@Component({
  selector: 'registration-page',
  templateUrl: './registration.component.html',
  providers:  [ControlService]
})
export class RegistrationComponent {
  controls: any[];

  constructor(service: ControlService) {
    this.controls = service.getControls(jsonData);
  }
}