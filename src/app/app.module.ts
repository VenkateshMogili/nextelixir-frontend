import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {CONST_ROUTING} from './app.routing';
import { HomeComponent } from './home/home.component';
import {UserserviceService} from "./userservice.service";
import {HttpModule} from '@angular/http';
import {HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { EditreviewComponent } from './editreview/editreview.component';
import { EmployeesComponent } from './employees/employees.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    EditreviewComponent,
    EmployeesComponent,
    ReviewsComponent,
    ViewEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CONST_ROUTING,
    HttpModule,
    HttpClientModule
  ],
  providers: [UserserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
