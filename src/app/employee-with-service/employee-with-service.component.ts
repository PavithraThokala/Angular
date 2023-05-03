import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-employee-with-service',
  templateUrl: './employee-with-service.component.html',
  styleUrls: ['./employee-with-service.component.css']
})
export class EmployeeWithServiceComponent {
  constructor(private srv : EmployeeDetailsService){
    
  }
  ngOnInit(){
    let ans:Employee[]=this.srv.getData()
    console.log(ans);
    
  }
}
