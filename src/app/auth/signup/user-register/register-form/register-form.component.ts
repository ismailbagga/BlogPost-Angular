import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  formGroup = new FormGroup({
    papa: new FormControl('', Validators.required),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),
    fullName: new FormControl('', [
      Validators.maxLength(20),
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    confirm: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}
  isValid(key: string): boolean {
    let control = this.getControler(key);
    console.log(control.invalid && control.touched && control.dirty);

    return control.valid && control.touched && control.dirty;
  }
  isUnValid(key: string): boolean {
    let control = this.getControler(key);
    return control.invalid && control.touched && control.dirty;
  }
  getControler(key: string): FormControl {
    let control = this.formGroup.get(key);
    if (!control) throw new Error('no contrller with ' + key);
    return control as FormControl;
  }
  fetchError(key: string, error: string): boolean {
    return this.getControler(key).hasError(error);
  }
}
