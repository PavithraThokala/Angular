import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  employeeRecord:Employee[]=[]

  
  ngOnInit(){
    let empObj1 : Employee ={
      employeeId:7263,
      employeeName: "Pavithra",
      employeeAge: 20,
      employeeEmailId: "pavithra@il.com",
      employeeSkills: ["Java","AWS"]
    }
    let empObj2 : Employee ={
      employeeId:7264,
      employeeName: "Sita",
      employeeAge: 23,
      employeeEmailId: "sita@il.com",
      employeeSkills: ["Python","ML"]
    }
    this.employeeRecord.push(empObj1)
    this.employeeRecord.push(empObj2)
  }
   navArray : string[]=[
    "salary",
    "update"
  ]
}
