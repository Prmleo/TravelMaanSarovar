import { Component, OnInit } from '@angular/core';
import{MasterService}from '../services/master.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  id:string="SaudiBroker";
  storeArray:any=[];
  constructor(private apiService:MasterService) { }


  ngOnInit() {this.getCustomerData();
   
  }
  getCustomerData():void{
    this.apiService.getCustomerData(this.id).subscribe(resultArr=>this.storeArray=resultArr,
    error=>console.log("the Error is::"+error))
  }
  loadOutletRegistrationByName(SelectedName)
  {
    alert(SelectedName);
   for(var i=0;i<this.storeArray.length;i++)
   {
     if(SelectedName==this.storeArray[i].CUST_NAME)
     {
       alert("inner"+this.storeArray[i].CUST_NAME);
      
      this.storeArray[0]=this.storeArray[i];
      this.storeArray.length=1;
     }
    }
  }
}
