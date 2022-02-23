import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/app-user/authentication.service';
// import static { ExceptionsUtils } from 'src/app/Utils/ExceptionUtils';
import { FormsControlUtils } from 'src/app/Utils/ValidatorsUtils';
import { FormFieldComponent } from 'src/app/widget/form-field/form-field.component';
import { ExceptionsUtils } from 'src/app/Utils/ExceptionUtils';
import { Router } from '@angular/router';
// import static {ExceptionsUtils} frameElement
export interface loginReq {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorText = '';
  times = 0;
  disable = false;
  formGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  fields = FormsControlUtils.retrieveLoginFields();
  constructor(
    private authService: AuthenticationService,
    private route: Router
  ) {}

  ngOnInit(): void {}
  handleSubmit(e: Event) {
    e.preventDefault;
    if (this.formGroup.invalid) {
      Object.keys(this.formGroup.controls).forEach((key) => {
        this.formGroup.get(key)?.markAsDirty();
      });
      return;
    }
    if (this.disable) return;
    this.errorText = '';
    const btn = e.target as HTMLButtonElement;
    btn.disabled = true;
    setTimeout(() => {
      this.login();
      btn.disabled = false;
    }, this.times * 100);

    // console.log(this.formGroup.value);
  }
  login() {
    const loginreq: loginReq = this.formGroup.value;
    this.authService.login(loginreq).subscribe({
      next: (value) => {
        console.log(value);

        // this.authService.emitLoginState(true);
        // this.route.navigate(['/']);
      },
      error: (error) => {
        const {
          error: { message },
        } = error;

        if (message === ExceptionsUtils.BAD_CREDENTIALS) {
          if (this.times > 10) this.times += 10;
          else this.times++;
          this.errorText = 'Wrong Password';
        } else if (message === ExceptionsUtils.NO_USER_WITH_EMAIL_Or_Username) {
          this.errorText = 'There no user with this username or email';
        } else {
          this.errorText = 'Ops Something went Wrong Try Again Later';
        }
      },
    });
  }
  getControler(key: string) {
    const controller = this.formGroup.get(key);
    if (!controller) throw new Error('there no controler with name of ' + key);
    return controller as FormControl;
  }
}
