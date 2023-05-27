import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  isAdmin: boolean = true;

  constructor(private ad: AdminService) {}

  ngOnInit(): void {
    this.ad.isAdmin.subscribe((status) => {
      this.isAdmin = status;
    });
  }
  
}