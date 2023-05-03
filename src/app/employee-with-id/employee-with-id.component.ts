import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-employee-with-id',
  templateUrl: './employee-with-id.component.html',
  styleUrls: ['./employee-with-id.component.css']
})
export class EmployeeWithIdComponent {
  employeeId : number=0
  employee! : Employee
  isReady: boolean=false
  constructor(private activeRoute : ActivatedRoute,private srv:EmployeeDetailsService){}
  eid:string="7263"
  runCode(){
    let queryData = this.activeRoute.paramMap.subscribe(
      (params)=>{
        let value = params.get("eid")
        if(value!=null){
          this.employeeId=(value as unknown as number)
        }
      }
    )
    this.employee =  this.srv.fetchEmployeeById(this.employeeId)
    this.isReady=true
  }
}
