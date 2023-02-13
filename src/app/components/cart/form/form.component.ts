import { Component, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
// fullname : string = ""
// address : string = ""
// creditcard : string = ""
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

