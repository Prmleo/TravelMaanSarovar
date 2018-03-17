import { Component, OnInit } from '@angular/core';
import { MasterService } from'../services/master.service';
@Component({
  selector: 'app-referal-unapproved-quotes',
  templateUrl: './referal-unapproved-quotes.component.html',
  styleUrls: ['./referal-unapproved-quotes.component.css']
})
export class ReferalUnapprovedQuotesComponent implements OnInit {

  id:string="SaudiBroker";
  storeArray:any=[];
  constructor(private apiService:MasterService) { }

  ngOnInit() {this.getUNApprovedQuotes();
  }
  getUNApprovedQuotes():void{
    this.apiService.getUNApprovedQuotes(this.id).subscribe(resultArr=>this.storeArray=resultArr,
    error=>console.log("the Error is::"+error))
  }
  loadOutletRegistrationByName(SelectedName)
  {
    alert(SelectedName);
   for(var i=0;i<this.storeArray.length;i++)
   {
     if(SelectedName==this.storeArray[i].CUSTOMER_NAME)
     {
       alert("inner"+this.storeArray[i].CUSTOMER_NAME);
      
      this.storeArray[0]=this.storeArray[i];
      this.storeArray.length=1;
     }
    }
  }
}
