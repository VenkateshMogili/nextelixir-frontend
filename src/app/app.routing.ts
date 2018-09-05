import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {EmployeesComponent} from './employees/employees.component';
import {ViewEmployeeComponent} from './view-employee/view-employee.component';
import {UpdateEmployeeComponent} from './update-employee/update-employee.component';

const routes: Routes = [
  // {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'employees', component: EmployeesComponent},
  // profile view-edit-delete
  {path: 'view/:id', component: ViewEmployeeComponent},
  {path: 'update/:id', component: UpdateEmployeeComponent}
];

export const CONST_ROUTING = RouterModule.forRoot(routes);
