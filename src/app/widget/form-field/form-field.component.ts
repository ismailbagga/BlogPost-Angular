import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
})
export class FormFieldComponent implements OnInit {
  valid: boolean = false;
  invalid: boolean = false;
  stateChanged = false;
  @Input() label = '';
  @Input() type = '';
  @Input() placeholder = '';
  @Input() errors: { error: string; text: string }[] = [];
  @Input() control!: FormControl;
  constructor() {}

  ngOnInit(): void {
    //   this.control.statusChanges.subscribe(() => {
    //     this.isInValid();
    //   });
    // }
  }
  isValid() {
    let control = this.control;
    // console.log(control.invalid && control.touched && control.dirty);
    // if (key === 'username') console.log('valid', control.untouched);

    return control.valid && control.dirty;
  }
  isInValid() {
    let control = this.control;
    // if (key === 'username') console.log('undvalid', control.untouched);
    return control.invalid && control.dirty;
  }

  fetchError(error: string): boolean {
    return this.control.hasError(error);
  }
}
