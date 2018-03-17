import { Injectable } from "@angular/core";
import { Http,Headers,Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Constant } from "../constant";
import {ApiRelationModel}from '../Models/relationModel';

@Injectable()
export class MasterService {
    constructor(private http: Http) { } 

  getAllReferenceNumber() :Observable<any[]>
  {
    let lists=this.http.get(Constant.baseUrl+'api/all/getAllReferenceNumber').map(response =>{
    return response.json();
    });
    return lists;
  }

  getAllReferenceNumberId(SelectedID:any):Observable<any>
  {
    let lists=this.http.get(Constant.baseUrl+'api/all/getCardNumberId?id'+SelectedID).map(response=>{
      return response.json();
    });
    return lists;
  }

  getRelation():Observable<ApiRelationModel[]>
  {
      let lists= this.http.get(Constant.baseUrl+'api/all/getallrelations').map((response:Response)=>{
          return <ApiRelationModel[]>response.json();
      })
      return lists;
  }
 
  getNationality():Observable<ApiRelationModel[]>
  {
      
      let lists= this.http.get(Constant.baseUrl+"api/all/getallnationality").map((response:Response)=>{
      return <ApiRelationModel[]>response.json();
  })
  return lists;
  }
  private handleError(error:Response)
  {
      return Observable.throw(error.statusText);
  }

  getcusData(SelectedName):Observable<ApiRelationModel[]>
    {
        let lists= this.http.get('http://localhost:9090/Travel-Web/api/all/ExistingQuote?login_Id='+SelectedName+'&product_Id=33').map((response:Response)=>{
            return <ApiRelationModel[]>response.json();
        })
        return lists;
    }
  getAllCountries():Observable<any[]>{

    let lists=this.http.get(Constant.baseUrl+'api/all/getallcountries').map(response =>{
        return response.json();
        });
        return lists;
  }

  getAllOccupations():Observable<any[]>
  {
    let lists=this.http.get(Constant.baseUrl+'api/all/getalloccupations').map(response =>{
        return response.json();
        });
        return lists;
  }

  getAllCities():Observable<any[]>
  {
    let lists=this.http.get(Constant.baseUrl+'api/all/getallcities').map(response =>{
        return response.json();
        });
        return lists;
  }

  getAllStates():Observable<any[]>
  {
    let lists=this.http.get(Constant.baseUrl+'api/all/getallstates').map(response =>{
        return response.json();
        });
        return lists;
  }

  getPortfolioPolices(SelectedName):Observable<ApiRelationModel[]>
  {
      let lists= this.http.get(Constant.baseUrl+'api/all/PortFolio?login_Id='+SelectedName+'&product_Id=33').map((response:Response)=>{
          return <ApiRelationModel[]>response.json();
      })
      return lists;
  }
  getCancelledPolicy(SelectedName):Observable<ApiRelationModel[]>
    {
        let lists= this.http.get(Constant.baseUrl+'api/all/CancelledPolicy?login_Id='+SelectedName+'&product_Id=33').map((response:Response)=>{
            return <ApiRelationModel[]>response.json();
        })
        return lists;
    }
    getApprovedQuotes(SelectedName):Observable<ApiRelationModel[]>
    {
        let lists= this.http.get(Constant.baseUrl+'api/all/ApprovedReferralQuotes?login_Id='+SelectedName+'&product_Id=33').map((response:Response)=>{
            return <ApiRelationModel[]>response.json();
        })
        return lists;
    }
    getUNApprovedQuotes(SelectedName):Observable<ApiRelationModel[]>
    {
        let lists= this.http.get(Constant.baseUrl+'api/all/UnApprovedReferralQuotes?login_Id='+SelectedName+'&product_Id=33').map((response:Response)=>{
            return <ApiRelationModel[]>response.json();
        })
        return lists;
    }
    getRejectQuotes(SelectedName):Observable<ApiRelationModel[]>
    {
        let lists= this.http.get(Constant.baseUrl+'api/all/RejectReferralQuotes?login_Id='+SelectedName+'&product_Id=33').map((response:Response)=>{
            return <ApiRelationModel[]>response.json();
        })
        return lists;
    }
    getCustomerData(SelectedName):Observable<ApiRelationModel[]>
    {
        let lists= this.http.get(Constant.baseUrl+'api/all/viewCustomer?login_Id='+SelectedName+'&product_Id=33').map((response:Response)=>{
            return <ApiRelationModel[]>response.json();
        })
        return lists;
    }
    getCustomerReport(startDate,EndDate,brokerType):Observable<ApiRelationModel[]>
    {
        let lists= this.http.get(Constant.baseUrl+'api/all/viewReport?sdate='+startDate+'&edate='+EndDate+'&login_Id='+brokerType+'&product_Id=33').map((response:Response)=>{
            return <ApiRelationModel[]>response.json();
        })
        return lists;
    }

}
