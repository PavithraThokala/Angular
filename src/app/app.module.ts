import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeWithServiceComponent } from './employee-with-service/employee-with-service.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { CryptoSinglePriceComponent } from './crypto-single-price/crypto-single-price.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { CryptoComparePriceComponent } from './crypto-compare-price/crypto-compare-price.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LandingComponent } from './landing/landing.component';
import { ErrorComponent } from './error/error.component';
import { SalaryComponent } from './salary/salary.component';
import { UpdateDataComponent } from './update-data/update-data.component';
import { EmployeeWithIdComponent } from './employee-with-id/employee-with-id.component';
import { TemplateFormsDemoComponent } from './template-forms-demo/template-forms-demo.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { StructuralDirectivesDemoComponent } from './structural-directives-demo/structural-directives-demo.component';
import { ModelFromChildComponent } from './model-from-child/model-from-child.component';
import { UnitTestDemoComponent } from './unit-test-demo/unit-test-demo.component';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EmployeeComponent,
    EmployeeWithServiceComponent,
    GithubUserComponent,
    CryptoSinglePriceComponent,
    GithubReposComponent,
    CryptoComparePriceComponent,
    CalculatorComponent,
    PipesDemoComponent,
    UserDetailsComponent,
    LandingComponent,
    ErrorComponent,
    SalaryComponent,
    UpdateDataComponent,
    EmployeeWithIdComponent,
    TemplateFormsDemoComponent,
    ModelDrivenComponent,
    StructuralDirectivesDemoComponent,
    ModelFromChildComponent,
    UnitTestDemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
