import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from '@progress/kendo-angular-menu';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddressComponent } from './address/address.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes = [
  { path: '', component: AddressComponent, text: 'Dashboard' },
  { path: 'employee', component: EmployeeListComponent, text: 'Employees' },
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenuModule, 
    GridModule,
    RouterModule.forRoot(routes),
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
