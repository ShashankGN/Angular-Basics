import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent {
  isShown:boolean=false;
  action(){
    this.isShown=!this.isShown;
  }

  students:Student[];

  constructor(){
    this.students=[
      {id:1,firstName:"John",lastName:"Wick",age:20},
      {id:2,firstName:"Harry",lastName:"Styles",age:22},
      {id:3,firstName:"Thomas",lastName:"J S",age:24},
      {id:4,firstName:"Charles",lastName:"Johnson",age:21}
    ]
  }

  items = ["GfG 1", "GfG 2", "GfG 3", "GfG 4"];
}
