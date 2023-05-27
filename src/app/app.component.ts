import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  title = 'assign8-security';

  loginStatus: boolean = false;

  isAdmin: boolean = false;

  constructor(public aS: AuthService, public ad: AdminService) {
  
  }

  ngOnInit(): void {
    this.aS.isLoggedIn.subscribe((status) => {
      this.loginStatus = status;
    });

    this.ad.isAdmin.subscribe((status) => {
      this.isAdmin = status;
    });
  }

}
