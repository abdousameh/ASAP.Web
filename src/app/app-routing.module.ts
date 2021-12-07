import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';


const routes = [
  { path: '', component: EmployeeListComponent, text: 'Employees' },
  { path: 'employees', component: EmployeeListComponent, text: 'Employees' },
  { path: 'address', component: AddressComponent, text: 'address' }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
