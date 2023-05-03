import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { CryptoComparePriceComponent } from './crypto-compare-price/crypto-compare-price.component';
import { CryptoSinglePriceComponent } from './crypto-single-price/crypto-single-price.component';
import { EmployeeWithIdComponent } from './employee-with-id/employee-with-id.component';
import { EmployeeComponent } from './employee/employee.component';
import { ErrorComponent } from './error/error.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { LandingComponent } from './landing/landing.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { ModelFromChildComponent } from './model-from-child/model-from-child.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { SalaryComponent } from './salary/salary.component';
import { StructuralDirectivesDemoComponent } from './structural-directives-demo/structural-directives-demo.component';
import { TemplateFormsDemoComponent } from './template-forms-demo/template-forms-demo.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [
  {path:"",component:LandingComponent}, // "" means home page
  {path:"crypto",component:CryptoSinglePriceComponent},
  {path:"history",component: CryptoComparePriceComponent},
  {path:"user",component:GithubUserComponent},
  {path:"project",component:GithubReposComponent},
  {path:"calculator",component:CalculatorComponent},
  {
  path:"employee",
  children:[
    {path:"",component:EmployeeComponent},
    {path:"salary",component:SalaryComponent},
    {path:"update",component:UpdateDataComponent}
  ]
  }, 
  { path : "details/:eid", component : EmployeeWithIdComponent},
  {path:"pipes",component:PipesDemoComponent},
  {path:"forms",component:TemplateFormsDemoComponent},
  {path:"model", component: ModelDrivenComponent},
  {path:"structuraldirective",component:StructuralDirectivesDemoComponent},
  {path:"modelfromchild",component:ModelFromChildComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
