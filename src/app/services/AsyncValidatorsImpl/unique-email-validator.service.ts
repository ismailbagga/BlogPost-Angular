import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { AuthenticationService } from '../app-user/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class UniqueEmailValidatorService implements AsyncValidator {
  constructor(private authService: AuthenticationService) {}
  validate = (
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    console.log(control);

    const { value } = control;
    console.log(value);

    console.log('go go');
    console.log('auth service', this.authService);

    return this.authService.isUniqueEmail(value).pipe(
      map((value) => {
        console.log(value);

        if (value.available) return null;
        return { existedEmail: 'email is taken' };
      })
    );
  };
}
