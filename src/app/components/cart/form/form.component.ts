import { Component, Output,EventEmitter } from '@angular/core';
import { fakeAsync } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {

  fullname : boolean = false
  address : boolean = false
  creditcard : boolean = false
err : boolean = true
 @Output() checkout = new EventEmitter()
order: FormGroup;

constructor() {
  this.order = new FormGroup({
    fullName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    address: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    creditcard :new FormControl(null, [Validators.required,Validators.maxLength(16)])
  });
}
validateCard(value : any) {
  if(isNaN(+value)){
    this.creditcard = true
    return
  } 
  if(value.length <= 15 || value.length > 16 ) {
    this.creditcard = true
    return
  }
  this.creditcard = false
  }
  validateAddress( value : any) {
    if(value.length < 6){
      this.address = true
      return
    }
    this.address = false
  }
  validateName( value : any) {
    if(value.length < 3){
      this.fullname = true
      return
    }
    this.fullname = false
  }
SubmitOrder() {
  if (this.order.invalid) {
    alert('Enter correct inputs')
  } else {
    // alert('hello')
  this.checkout.emit(this.order.value)
}
}
getfullName(){
  this.order.get('fullName')
}



}
// function Validateinput(): import("@angular/forms").ValidatorFn {
//   throw new Error('Function not implemented.');
// }

