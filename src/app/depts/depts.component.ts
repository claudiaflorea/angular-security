import { Component } from '@angular/core';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.scss']
})
export class DeptsComponent {

  public depts:string[]   =  ["Accouts", "Sales", "Marketing", "Testing", "Admin"];

  constructor() { }

  ngOnInit() {
  }

}
