import { Component, OnInit } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/core/services';
import { Employee } from 'src/core/models';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employeeData: Employee[] = [];

  constructor(private employeeService:EmployeeService) { 
    this.employeeService.get().subscribe(res=>{
      this.employeeData = res;
      console.log( this.employeeData)
    });
   
  } 



  ngOnInit(): void {
  }





}
