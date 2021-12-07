import { Component, OnInit } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AddressStatistics } from 'src/core/models';
import { AddressService } from 'src/core/services';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  addressStatistics:AddressStatistics[]=[];
  constructor(private addressService:AddressService) { 
    this.addressService.get().subscribe(res=>{
      this.addressStatistics = res;
    });
   
  } 

  ngOnInit(): void {
    this.addressService.get().subscribe(res=>{
      this.addressStatistics = res;
      console.log( this.addressStatistics)
    });
  }

 

}
