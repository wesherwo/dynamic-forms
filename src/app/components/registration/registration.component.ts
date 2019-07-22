import { Component, OnInit }       from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'registration-page',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent  implements OnInit{
  controls: any[] = [];

  constructor(private cs: ControlService, private dbs: DatabaseService) {
  }

  ngOnInit() {
    this.dbs.getFormById(1).subscribe((form:string)=>{
      this.controls = this.cs.getControls(form);
    });
  }

  onSubmit(data){
    this.dbs.addUser(data).subscribe();
  }
}