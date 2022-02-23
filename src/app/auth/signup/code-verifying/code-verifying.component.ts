import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/app-user/authentication.service';
import { ExceptionsUtils } from 'src/app/Utils/ExceptionUtils';

@Component({
  selector: 'app-code-verifying',
  templateUrl: './code-verifying.component.html',
  styleUrls: ['./code-verifying.component.css'],
})
export class CodeVerifyingComponent implements OnInit {
  uuid: string = 'sdqs';
  error = { text: '' };
  success = { text: '' };

  formControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^([0-9]){6}$/),
  ]);
  constructor(
    private authService: AuthenticationService,
    private activetedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.activetedRoute.params.subscribe((value) => {
      const { id } = value;
      this.uuid = id;
    });
  }
  // errorDetection(message : ) {}
  verify() {
    this.error.text = '';
    this.success.text = '';

    if (!this.formControl.valid) {
      this.formControl.markAsDirty({ onlySelf: true });
      return;
    }
    const { value } = this.formControl;
    this.authService.verify(this.uuid, value).subscribe({
      next: (res) => {
        this.authService.emitLoginState(true);
        console.log(
          this.authService.getLoginStateAsObservable().subscribe((value) => {
            console.log('after verifying', value);
          })
        );
        this.route.navigate(['register', 'complete']);
      },
      error: (error) => {
        const {
          error: { message },
        } = error;

        if (message === ExceptionsUtils.INVALID_VERIFICATION) {
          this.error.text = 'The Code is Wrong';
        } else if (message === ExceptionsUtils.USER_ENABLE) {
          this.error.text = 'This token is Aleadry Verified';
        } else if (message === ExceptionsUtils.ALREADY_EXIST) {
          this.error.text = 'User with those creadentials is already Exist';
        } else {
          this.error.text = 'Ops Something went wrong try again later';
        }
      },
    });
  }
  resendCode() {
    this.authService.ResendVerificationCode(this.uuid).subscribe({
      next: (value) => {},
      error: (error) => {
        const {
          error: { message },
        } = error;
        console.log(message, error);

        if (message === ExceptionsUtils.NO_VERIFICATION_WAS_FOUND) {
          this.error.text = 'this verifcation page is invalid is invalid';
        } else if (message === ExceptionsUtils.USER_ENABLE) {
          this.error.text = 'This user is Aleadry Verified';
        } else if (message === ExceptionsUtils.EMAIl_SPAM) {
          this.error.text = 'You send to many email We Gonna Stop You here';
        } else {
          this.error.text = 'Ops Something went wrong try again later';
        }
      },
    });
  }
}
