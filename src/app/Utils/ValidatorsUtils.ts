import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  FormControl,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { MultipleValidators } from '../services/ValidatorsImpl/multipleValidations';

@Injectable({ providedIn: 'root' })
export class FormsControlUtils implements AsyncValidator {
  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    throw new Error('Method not implemented.');
  }
  private static formControlls: { [key: string]: FormControl } = {
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
      MultipleValidators.letterMatch,
      MultipleValidators.availablesCharMatch,
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
  };

  static getSignUpControls() {
    return this.formControlls;
  }
  static getChangeUserDataControls() {
    return {
      ...this.formControlls,
      desc: new FormControl('', Validators.required),
    };
  }
  static retrieveFields() {
    return [
      {
        name: 'username',
        label: 'Username',
        type: 'text',
        errors: [
          { error: 'required', text: 'Username Required' },
          { error: 'existedUsername', text: 'this Username is taken' },
          {
            error: 'minlength',
            text: ' Username can not be less then 3 caracters',
          },
          {
            error: 'maxlength',
            text: 'Username can not be more then 20 caracters',
          },
          {
            error: 'mustBeValidLetter',
            text: 'Username can only accept letter and _',
          },
          {
            error: 'mustContainLetter',
            text: 'Username must contain at least one letter',
          },
        ],
      },
      {
        name: 'fullName',
        label: 'Full Name',
        type: 'text',
        errors: [
          { error: 'required', text: 'Full Name is Required' },

          {
            error: 'maxlength',
            text: 'Full Name can not be more then 20 caracters',
          },
        ],
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        errors: [
          { error: 'required', text: 'Email Required' },
          { error: 'existedEmail', text: 'Email already used' },
          {
            error: 'email',
            text: 'Enter a Valid Email Syntax',
          },
        ],
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        errors: [
          { error: 'required', text: 'Password is Required' },
          {
            error: 'minlength',
            text: ' Username can not be less then 5 caracters',
          },
        ],
      },
      {
        name: 'confirm',
        label: 'Password Confirmation',
        type: 'password',
        errors: [
          { error: 'required', text: 'Confirmation Password is  Required' },

          {
            error: 'passwordDontMatch',
            text: 'Confirmation password must match with password',
          },
        ],
      },
    ];
  }
}
