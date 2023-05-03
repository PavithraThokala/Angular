import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {
  employeeRecord:Employee[]=[]
  result : Employee={
    employeeAge:0,
    employeeId:-1,
    employeeName:"",
    employeeSkills:[],
    employeeEmailId:""
  }
  constructor(private httpSrc : HttpClient) {
    let empObj1 : Employee ={
      employeeId:7263,
      employeeName: "Pavithra",
      employeeAge: 20,
      employeeEmailId: "pavithra@il.com",
      employeeSkills: ["Java","AWS"]
    }
    let empObj2 : Employee ={
      employeeId:7264,
      employeeName: "abc",
      employeeAge: 23,
      employeeEmailId: "abc@il.com",
      employeeSkills: ["Python","ML"]
    }
    this.employeeRecord.push(empObj1)
    this.employeeRecord.push(empObj2)
   }
   public getData():Employee[]{
    return this.employeeRecord
   }
   employees:Employee[]=[]
  
   public fetchEmployeeById(eid:number): Employee{
    let url="assets/data.json"
    
     /*
        from all data fetched, for each new entry found
        run a for loop, match eid if condition and return if match is found.
        If eid doesn't exist,  return a blank object or an error message
      */
    // return this.httpSrc.get<Employee>(url).subscribe(
    //  {
    //   (next) : (response :Employee[])=>{
    //     response.filter((emp:Employee)=>{emp.employeeId == eid})
    //   },
    //   complete: ()=>{console.log("FINISHED")}
    //  }
    // )
     this.httpSrc.get<Employee[]>(url).subscribe(
      {
        next: (employeeArray : Employee[])=>{
          employeeArray.forEach((emp : Employee)=> this.employees.push(emp))
        },
        complete: ()=>{
          console.log("COMPLETED");
          console.log(this.employees);
        }
      }
      
      )
          let ans=this.employees.filter((emp:Employee)=> emp.employeeId == eid).at(0)
          // this.result =ans ? ans : this.result
          // if(ans!=undefined){
          //   result=ans
          // }
          if(typeof(ans)!=undefined){
            this.result=ans as Employee
            console.log(ans)
            console.log(this.result)
          }
        
    return this.result
   }
}
