import { Component, OnInit }       from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from 'src/app/services/control.service';
import { DatabaseService } from 'src/app/services/database.service';


@Component({
  selector: 'login-page',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
  controls:any[]=[];

  constructor(private router: Router, private cs: ControlService, private dbs: DatabaseService) {
  }

  ngOnInit() {
    this.dbs.getFormById(2).subscribe((form:string)=>{
      this.controls = this.cs.getControls(form);
    });
  }

  login(data){
    this.dbs.login(data).subscribe(res => {
      localStorage.setItem("currentuser",JSON.stringify(res)); 
            this.router.navigate(['/profile']);
          });
  }

  register(){
    this.router.navigate(['/register']);
  }
}