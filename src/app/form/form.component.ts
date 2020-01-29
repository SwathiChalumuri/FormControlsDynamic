import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  myForm = new FormGroup({
    Fname: new FormControl(''),
    Lname: new FormControl('')
  })
  message1;
  message2;
  constructor() { }

  ngOnInit() {
    // this.myForm.get('Fname').valueChanges.subscribe(val => {
    //   this.message1 = val;
    // });

    // this.myForm.get('Lname').valueChanges.subscribe(val => {
    //   this.message2 = val;
    // });

    this.myForm.value.subscribe(val => {
      console.log(val.get('Lname'));
    });
  }
  formChange(event){
    console.log(event.target.value);
  }
}
