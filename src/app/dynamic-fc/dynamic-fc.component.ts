import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-dynamic-fc',
  templateUrl: './dynamic-fc.component.html',
  styleUrls: ['./dynamic-fc.component.scss']
})
export class DynamicFCComponent implements OnInit {
  selectForm = [
    {viewValue: 'userForm'},
    {viewValue: 'adminForm'},
    {viewValue: 'othersForm'}
  ];
 
  bool = false;
 
   forms: any;
 
 formlist1 = {
  UserfirstName: '',
  UserlastName: ''
 }

 formlist2 = {
  AdminfirstName: '',
  AdminlastName: ''
 }

 formlist3 = {
  firstName: '',
  lastName: ''
 }
 farr =[];
  myForm: FormGroup;
  constructor() { }

  ngOnInit() {
  
  }

  onChange(ev){
   this.bool = true;
    console.log(ev.value);
    this.forms = ev.value;
    this.farr = [];
    const f_obj = {};

    if(this.forms === "userForm"){
      
      for(let i of Object.keys(this.formlist1)){
        f_obj[i] = new FormControl(this.formlist1[i],Validators.required);
        this.farr.push(i);
      }
       this.myForm = new FormGroup(f_obj);
    }
    if(this.forms === "adminForm"){
      for(let i of Object.keys(this.formlist2)){
        f_obj[i] = new FormControl(this.formlist2[i],Validators.required);
        this.farr.push(i);
      }
      this.myForm = new FormGroup(f_obj);
    }
    if(this.forms === "othersForm"){
      for(let i of Object.keys(this.formlist3)){
        // json = {
        //   controller: ,
        //   type: 'text/checkbox/selct'
        // }
        f_obj[i] = new FormControl(this.formlist3[i],Validators.required);
        this.farr.push(i);
      }
      this.myForm = new FormGroup(f_obj);
    }
//  [{c: , type: type}]
  }
  onSubmit(){
    console.log(this.myForm.value)
    this.bool = false;
  }
}
