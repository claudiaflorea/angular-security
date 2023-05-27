import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  empObj:any = {};

  public empsArray:any[]  = [
    {empno: 1025, ename : "Scott", job : "Manager", sal : 56000},
    {empno: 1026, ename : "Smith", job : "Sr.Manager", sal : 65000},
    {empno: 1027, ename : "Sandy", job : "Lead", sal : 45000},
    {empno: 1028, ename : "Sam", job : "Group Manager", sal : 75000},
  ];

 constructor(private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {

     let eno  = this.activatedRoute.snapshot.params["id"];
     this.empObj = this.empsArray.find(item => item.empno == eno);
  }
}