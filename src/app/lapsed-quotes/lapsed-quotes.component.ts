import { Component, OnInit } from '@angular/core';
import { MasterService } from'../services/master.service';
@Component({
  selector: 'app-lapsed-quotes',
  templateUrl: './lapsed-quotes.component.html',
  styleUrls: ['./lapsed-quotes.component.css']
})
export class LapsedQuotesComponent implements OnInit {
  id:string="SaudiBroker";
  storeArray:any=[];
  constructor(private apiService:MasterService) { }

  ngOnInit() {
    this.getcusData();
  }
  getcusData():void{
    this.apiService.getcusData(this.id).subscribe(resultArr=>this.storeArray=resultArr,
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
