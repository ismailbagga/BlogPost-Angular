import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormsControlUtils } from 'src/app/Utils/ValidatorsUtils';
import { AuthenticationService } from 'src/app/services/app-user/authentication.service';
import { UniqueEmailValidatorService } from 'src/app/services/AsyncValidatorsImpl/unique-email-validator.service';
import { UniqueUsernameValidatorService } from 'src/app/services/AsyncValidatorsImpl/unique-username-validator.service';
import { MatchPasswordService } from 'src/app/services/ValidatorsImpl/match-password.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  errorName: string = '';
  constructor(
    private authService: AuthenticationService,
    private matchPassword: MatchPasswordService,
    private uniqueUsernameValid: UniqueUsernameValidatorService,
    private uniqueEmailValid: UniqueEmailValidatorService
  ) {
    console.log(this.authService);
  }
  controlsObj = FormsControlUtils.getSignUpControls();
  formGroup = new FormGroup(
    {
      ...this.controlsObj,
      username: this.addAsyncValid(
        this.controlsObj['username'],
        this.uniqueUsernameValid
      ),
      email: this.addAsyncValid(
        this.controlsObj['email'],
        this.uniqueEmailValid
      ),
    },
    this.matchPassword.validate
  );

  ngOnInit(): void {}
  addAsyncValid(controler: FormControl, validator: AsyncValidator) {
    controler.addAsyncValidators(validator.validate);
    return controler;
  }
  extracFields() {
    return FormsControlUtils.retrieveFields();
  }
  getControler(key: string): FormControl {
    let control = this.formGroup.get(key);
    if (!control) throw new Error('no controler with a name of ' + key);
    return control as FormControl;
  }

  trackByFn(index: any, item: any) {
    return index;
  }
  handleSubmit(event: Event) {
    event.preventDefault;
    if (this.formGroup.invalid) {
      this.toutchAllController();
      return;
    }
    console.log(this.formGroup.value);
  }
  toutchAllController() {
    Object.keys(this.formGroup.controls).forEach((element) => {
      const control = this.getControler(element);
      control?.markAsTouched({ onlySelf: true });
      control?.markAsDirty({ onlySelf: true });
    });
  }
}
