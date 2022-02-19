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
    const { value } = control;

    return this.authService.isUniqueEmail(value).pipe(
      map((value) => {
        if (value.available) return null;
        return { existedEmail: 'email is taken' };
      })
    );
  };
}
