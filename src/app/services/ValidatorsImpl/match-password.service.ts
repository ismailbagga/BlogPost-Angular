import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class MatchPasswordService implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    const { password, confirm } = control.value;
    if (password === confirm) {
      control.get('confirm')?.setErrors(null);
      return null;
    }
    control.get('confirm')?.setErrors({ passwordDontMatch: true });
    return { passwordDontMatch: true };
  }
}
