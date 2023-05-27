import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() {}
  isAdmin = new BehaviorSubject(false);

  checkAdmin() {
    this.isAdmin.next(true);
  }
 
}