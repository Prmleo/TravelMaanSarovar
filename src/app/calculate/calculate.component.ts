import { Component, OnInit,OnDestroy,Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/switchMap';
import 'rxjs/Rx';
import { Constant } from '../constant';

import { AuthenticateService } from '../services/authenticate.service';
import { UserService } from '../services/user.service';
import { MasterService } from'../services/master.service';


@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit,OnDestroy {
  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor(public route: ActivatedRoute, public router: Router, public authenticate: AuthenticateService,public userService:UserService,public master:MasterService) { }

  ngOnInit() {
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');

    this.loadAllOccupation();
    this.loadAllCity();
    this.loadAllNationality();
  // alert(JSON.stringify(this.Occupations[0].occupationName))

  var personObject=JSON.parse(sessionStorage.getItem('personObject'));   
    if(personObject==null)
      {
        this.router.navigate(['/new']);
      }
      else
      {
        this.user = Object.assign(personObject, this.user);    
      }
  }

  ngOnDestroy(){
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }
 
  user:any={
  Occupation:{},
  City:{},
  Nationality:{}
  }

  Occupations:any[]
  Citys:any[]
  Nationalitys:any[]
  


  loadAllOccupation():void{
    this.master.getAllOccupations().subscribe(Occupation=>{
     this.Occupations=Occupation;
    });
  }

  loadAllCity():void{
     this.master.getAllCities().subscribe(City=>{
       this.Citys=City;
     });
  }
loadAllNationality():void{
  this.master.getNationality().subscribe(Nationality=>{
    this.Nationalitys=Nationality;
  });
}


}
