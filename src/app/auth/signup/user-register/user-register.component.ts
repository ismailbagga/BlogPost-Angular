import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
    username: new FormControl('', [
      Validators.maxLength(2),
    ]),
    fullName: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(5),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
       Validators.maxLength(50),
     ]),
  });
  constructor() {}

  ngOnInit(): void {
  
  }
  handleSubmit(e: Event) : void  {
    // if (this.formGroup.invalid) return ;
    // e.preventDefault();
    // console.log('eye ye');
  }
}
