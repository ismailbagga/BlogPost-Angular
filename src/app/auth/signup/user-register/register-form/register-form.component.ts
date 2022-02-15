import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatchPasswordService } from 'src/app/services/validators/match-password.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  constructor(private matchPassword: MatchPasswordService) {}

  formGroup = new FormGroup(
    {
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
      confirm: new FormControl('', Validators.required),
    },
    this.matchPassword.validate
  );

  ngOnInit(): void {}
  isValid(key: string): boolean {
    let control = this.getControler(key);
    // console.log(control.invalid && control.touched && control.dirty);
    // if (key === 'username') console.log('valid', control.untouched);

    return control.valid && control.touched && control.dirty;
  }
  isUnValid(key: string): boolean {
    let control = this.getControler(key);
    // if (key === 'username') console.log('undvalid', control.untouched);
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
  handleSubmit(event: Event) {
    event.preventDefault;
    if (this.formGroup.invalid) {
      Object.keys(this.formGroup.controls).forEach((element) => {
        const control = this.getControler(element);
        control?.markAsTouched({ onlySelf: true });
        control?.markAsDirty({ onlySelf: true });
      });
      return;
    }
    console.log(this.formGroup.value);
  }
}
