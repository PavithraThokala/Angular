import { Component } from '@angular/core';
import { option } from '../option';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  firstNumber : number = 0
  secondNumber : number = 0
  result : number  = 0
  optionText : string ="Addition"
  operation : option = option.ADDITION

  mapOptionToEnum(){
    if (this.optionText == "Addition"){
      this.operation = option.ADDITION
    }

    if (this.optionText == "Subtraction"){
      this.operation = option.SUBTRACTION
    }

    if (this.optionText == "Multiplication"){
      this.operation = option.MULTIPLICATION
    }

    if (this.optionText == "Division"){
      this.operation = option.DIVISION
    } 

    this.menuFunction()


  }


  menuFunction(){
    if (this.operation ==option.ADDITION){
      this.addition()
    }

    if (this.operation == option.SUBTRACTION){
      this.subtraction()
    }
    if (this.operation == option.MULTIPLICATION){
      this.multiplication()
    }
    if (this.operation == option.DIVISION){
      this.division()
    }
  }


  addition() : void {
      this.result = this.firstNumber + this.secondNumber
  } 

  subtraction() : void {
    this.result = this.firstNumber - this.secondNumber
  }  

  multiplication() : void {
    this.result = this.firstNumber * this.secondNumber
  } 
  division() : void {
    this.result = this.firstNumber / this.secondNumber
  } 
}
