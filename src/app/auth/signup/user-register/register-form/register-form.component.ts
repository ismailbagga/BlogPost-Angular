import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormsControlUtils } from 'src/app/Data/ValidatorsObject';
import { MatchPasswordService } from 'src/app/services/validators/match-password.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  constructor(private matchPassword: MatchPasswordService) {}

  formGroup = new FormGroup(
    FormsControlUtils.getSignUpControls(),
    this.matchPassword.validate
  );

  ngOnInit(): void {}
  extracFields() {
    return FormsControlUtils.retrieveFields();
  }
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
  trackByFn(index: any, item: any) {
    return index;
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
