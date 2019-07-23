import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { DatabaseService } from 'src/app/services/database.service';
import { Router } from '@angular/router';


@Component({
  selector: 'registration-page',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
  controls: any[] = [];
  errorMsg = "";

  constructor(private router: Router, private cs: ControlService, private dbs: DatabaseService) {
  }

  ngOnInit() {
    this.dbs.getFormById(1).subscribe((form: string) => {
      this.controls = this.cs.getControls(form);
    });
  }

  onSubmit(data) {
    this.dbs.addUser(data).subscribe(message => {
      let msg = JSON.parse(JSON.stringify(message));
      if (msg.text == "success") {
        this.dbs.login(data).subscribe(res => {
          localStorage.setItem("currentuser", JSON.stringify(res));
          this.router.navigate(['/profile']);
        });
      } else {
        this.errorMsg = msg.text;
      }
    });
  }
}