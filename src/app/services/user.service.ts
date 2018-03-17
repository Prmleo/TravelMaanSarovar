import{ Injectable } from '@angular/core';
import{ Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Http,Response,Headers,RequestOptions } from'@angular/http';
import { Constant } from '../constant';
import { Request } from '@angular/http/src/static_request';
import {ApiRelationModel}from '../Models/relationModel';

@Injectable()
export class UserService{
  constructor(public http:Http){
        }
        RegisterUser2(aadhaar:any):Observable<any>
        {
          debugger;
          alert (JSON.stringify(aadhaar));
          let url = Constant.baseUrl+'api/all/savepaadcardnumberunique';
          let headers =new Headers({'Content-Type ' : 'application/JSON'});
          let options = new RequestOptions ({ headers : headers });
          return this.http.post(url,aadhaar,options)
          .map (res => <any> res.json()); 
        }

        RegisterUser(user:any):Observable<any>
        {
          alert ("gng to post"+JSON.stringify(user));
          let url = Constant.baseUrl+'api/all/saveptloginmaster';
          let headers =new Headers({'Content-Type ' : 'application/JSON'});
          let options = new RequestOptions ({ headers : headers });
          return this.http.post(url,user)
          .map (res => <any> res.json()); 
        }
        RegisterPerson(user:any):Observable<any>
        {
          alert ("gng to post"+JSON.stringify(user));
          let url = Constant.baseUrl+'api/all/saveTravelDetail';
          let headers =new Headers({'Content-Type ' : 'application/JSON'});
          let options = new RequestOptions ({ headers : headers });
          return this.http.post(url,user)
          .map (res => <any> res.json()); 
        }

}