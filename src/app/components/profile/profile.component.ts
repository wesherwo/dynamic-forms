import { Component, OnInit } from '@angular/core';
import { ControlService } from 'src/app/services/control.service';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'profile-page',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  editing = false;
  user;
  viewcontrols: any[] = [];
  editcontrols: any[] = [];

  constructor(private cs: ControlService, private dbs: DatabaseService) {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("currentuser"));
    this.dbs.getFormById(1).subscribe((form: string) => {
      this.viewcontrols = this.cs.getControls(form);
      this.editcontrols = this.cs.getControls(form);
      for (var i = 0; i < this.viewcontrols.length; i++) {
        if (this.user[this.viewcontrols[i].key] != undefined) {
          this.viewcontrols[i].value = this.user[this.viewcontrols[i].key];
          this.editcontrols[i].value = this.user[this.editcontrols[i].key];
        }
        this.viewcontrols[i].disabled = true;
      }
    });
  }

  onEdit(){
    document.getElementById("view").hidden = true;
    document.getElementById("edit").hidden = false;
  }

  onSave(data){
    document.getElementById("edit").hidden = true;
    document.getElementById("view").hidden = false;
    data = '{"id":"' + this.user.id + '","userdetails":' + data + '}';
    this.dbs.updateUser(data).subscribe();
  }
}