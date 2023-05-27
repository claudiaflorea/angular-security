import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    uid:string  = "";
    pwd:string  = "";
    result:string  = "";
    loggedIn: boolean = false;
    isAdmin: boolean = false;

    constructor(
      private router:Router, 
      private activatedRoute:ActivatedRoute, 
      public as: AuthService, 
      public ad: AdminService
      ) { }
    
    loginButton_click():void {

    let str  = this.activatedRoute.snapshot.queryParams["returnUrl"];

    if(str == null)  
        str  = "/";
    if(this.uid.valueOf() === "admin"  && this.pwd.valueOf() === "admin123") {
      sessionStorage.setItem("AUTH_TOKEN", this.uid);
      this.router.navigate([str]);
      this.ad.checkAdmin();
      this.as.loginUser();
    } else if (this.uid != "admin"  && this.pwd != "admin123") {
      sessionStorage.setItem("AUTH_TOKEN", this.uid);
      this.router.navigate([str]);
      this.as.loginUser();
    }
    else {
      this.result  = "Invalid user id or password";
    }
  }   

}