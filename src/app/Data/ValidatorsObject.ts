import { FormControl, Validators } from '@angular/forms';

export class FormsControlUtils {
  private static formControlls: { [key: string]: FormControl } = {
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
      Validators.pattern(/(?=^\w*$)/gi),
      Validators.pattern(/(?=\d*[a-z_])/gi),
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
  static getValidationMessage() {
    return [
      {
        fieldName: 'username',
        label: 'Username',
        type: 'text',
        errors: [
          { error: 'required', text: 'Username Required' },
          {
            error: 'minlength',
            text: ' Username can not be less then 3 caracters',
          },
          {
            error: 'maxlength',
            text: 'Username can not be more then 20 caracters',
          },
        ],
      },
      {
        fieldName: 'fullName',
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
        fieldName: 'email',
        label: 'Email',
        type: 'email',
        errors: [
          { error: 'required', text: 'Email Required' },
          {
            error: 'email',
            text: 'Enter a Valid Email Syntax',
          },
        ],
      },
      {
        fieldName: 'password',
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
        fieldName: 'confirm',
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
