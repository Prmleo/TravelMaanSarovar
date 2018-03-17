import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators,FormGroup,FormControl} from '@angular/forms';
import {FormValidation}from './validationFile';
import{trigger,state,style,transition,animate,keyframes}from '@angular/animations';
import { MasterService } from'../services/master.service';
import { UserService } from'../services/user.service';
import{Errors}from './errorMessages';
import{ApiRelationModel}from '../Models/relationModel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-insured-infoemation',
  templateUrl: './insured-infoemation.component.html',
  styleUrls: ['./insured-infoemation.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1.1)',left: '0',
        })),
        state('large', style({
            transform: 'scale(0.5)',left: '70%',
        })),
        transition('small => large', animate('6000ms ease-in')),
    ]),
  ]
})
export class InsuredInfoemationComponent implements OnInit {
  myFormObject:FormGroup;
  travelObjet:any={};
  relationArray:ApiRelationModel[];
  nationArr:ApiRelationModel[];
  cardNumber:any;
  sno:number=1;
  personObject:any=[{}];
  morePerson:boolean=false;

  constructor(public fb: FormBuilder,private userService:UserService,public errs:Errors,private apiService:MasterService,public router:Router) {this.myFormObject=new FormGroup({
    cusNameEnglish:new FormControl('',[Validators.required,FormValidation.noSpace,FormValidation.noNumber]),
    cusNameArabic:new FormControl('',Validators.required),
    cusNameEnglishHeader:new FormControl('',Validators.required),
    NationalId:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    mail:new FormControl('',[Validators.required,FormValidation.noMail]),
    Mobile:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),FormValidation.noMobil,FormValidation.noMobStr]),
    //merge tabel

    passengerName:new FormControl('',[Validators.required,FormValidation.noSpace,FormValidation.noNumber]),
    passengerNameArabic:new FormControl('',Validators.required),
    passName:new FormControl('',[Validators.required,FormValidation.passNumber]),
    myNation:new FormControl('',[Validators.required,FormValidation.passNumber]),
    myRelation:new FormControl('',Validators.required),
    myDob:new FormControl('',Validators.required),
    myGender:new FormControl('',Validators.required),
    passExpireDate:new FormControl('',Validators.required),
    Sno:new FormControl('',Validators.required)
  }) }
  ngOnInit() {
    this.getNationality();
 this.getRelation();
  
  }
  submit(model: any, isValid: boolean) {
  console.log(model, isValid);
  let customerName = this.myFormObject.controls.cusNameEnglish.value
  let customerNameInArabic = this.myFormObject.controls.cusNameArabic.value
  let companyRegistrationNumber = this.myFormObject.controls.NationalId.value
  let userMail=this.myFormObject.controls.mail.value
  let mobile=this.myFormObject.controls.Mobile.value
  let header=this.myFormObject.controls.cusNameEnglishHeader.value
    this.travelObjet={"title":header,"customerName":customerName,"customerNameInArabic":customerNameInArabic,"companyRegistrationNumber":companyRegistrationNumber,"userMail":userMail,"mobile":mobile};
    //alert(JSON.stringify(this.travelObjet));
    this.userService.RegisterUser(this.travelObjet).subscribe(
      data => console.log("post request Success"+JSON.stringify(data)),
      err => console.log("post request error is"+err));

      //second component

      let  Name = this.myFormObject.controls.passengerName.value
let NameArabic = this.myFormObject.controls.passengerNameArabic.value
let Nationaid = this.myFormObject.controls.NationalId.value
let passportNum=this.myFormObject.controls.passName.value
let Nation=this.myFormObject.controls.myNation.value
let Relation=this.myFormObject.controls.myRelation.value
let Dob=this.myFormObject.controls.myDob.value
let Gender=this.myFormObject.controls.myGender.value
let passExpir=this.myFormObject.controls.passExpireDate.value
let SerialNo=this.myFormObject.controls.Sno.value
let relationId
let nationalityId
for(var i=0;i<this.relationArray.length;i++)
{
  //alert(Relation);
  if(Relation==(this.relationArray[i].relationType))
  {
    alert(this.relationArray[i].id);
    relationId=this.relationArray[i].id;
  }
}
for(var i=0;i<this.nationArr.length;i++)
{
  //alert(Relation);
  if(Nation==(this.nationArr[i].nationalityName))
  {
   // alert("nat id="+this.nationArr[i].id);
    nationalityId=this.nationArr[i].id;
  }
}

this.personObject=[{"serialNumber":SerialNo,"passengerName":Name,"passengerLastName":NameArabic,
                  "dateOfBirth":Dob,"gender":Gender[0],"relation":{"id":relationId,"relationType": Relation},
                  "nationality":{"id":nationalityId,"nationalityName":Nation},
                   "iqamaNO":Nationaid,"passportNo": passportNum,"passportExpiryDate":passExpir}];
 // alert(JSON.stringify(this.personObject));
  this.userService.RegisterPerson(this.personObject).subscribe(
    data => console.log("post request Success"+JSON.stringify(data)),
    err => console.log("post request error is"+err));
    let last=document.getElementById("last");
    last.hidden=false;

    //redirect the page
    
    }
  state: string = 'small';

  animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }
  incrementSno()
{
  this.morePerson=true;
  this.sno=this.sno+1;
}
  getRelation():void{
    this.apiService.getRelation().subscribe(resultArray=>this.relationArray=resultArray,
    error=>console.log("the Error is::"+error))
   
  }
  getNationality():void{
    this.apiService.getNationality().subscribe(resultArr=>this.nationArr=resultArr,
    error=>console.log("the Error is::"+error))
  }
  MoveNextPage()
  {
    sessionStorage.setItem("personObject",JSON.stringify(this.personObject));
  this.router.navigate(['/calculate']);

  }
get cusNameEnglish()
{
  return this.myFormObject.get('cusNameEnglish');
}
get cusNameArabic()
{
  return this.myFormObject.get('cusNameArabic');
}
get mail()
{
  return this.myFormObject.get('mail');
}
get NationalId()
{
  return this.myFormObject.get('NationalId');
}
get Mobile()
{
  return this.myFormObject.get('Mobile');
}
  
login(event)
{
  console.log(event);
}
// second component

get passengerName()
{
  return this.myFormObject.get('passengerName');
}
get passengerNameArabic()
{
  return this.myFormObject.get('passengerNameArabic');
}
get passName()
{
  return this.myFormObject.get('passName');
}
get myNation()
{
  return this.myFormObject.get('myNation');
}

}
