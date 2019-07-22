import { Component, OnInit }       from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'profile-page',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit{
    user;

  constructor(private router: Router, private dbs: DatabaseService) {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("currentuser"));
  }
}