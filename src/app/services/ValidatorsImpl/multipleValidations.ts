import { AbstractControl, Validator, Validators } from '@angular/forms';

export class MultipleValidators {
  public static availablesCharMatch(control: AbstractControl) {
    let value: string = control.value;
    const regex = /(?=^\w+$)/gi;
    if (value.match(regex)) return null;
    return { mustBeValidLetter: 'must be avalid letter or _' };
  }
  public static letterMatch(control: AbstractControl) {
    let value: string = control.value;
    const regex = /(?=[a-z_])/gi;
    if (value.match(regex)) return null;
    return { mustContainLetter: 'must contain a letter' };
  }
}
