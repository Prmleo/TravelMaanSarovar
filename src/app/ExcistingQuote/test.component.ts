import { Component, OnInit } from '@angular/core';
import { MasterService } from'../services/master.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
storeArray:any=[];
sno:number=1;

  constructor(private apiService:MasterService) { }
id:string="SaudiBroker";


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

