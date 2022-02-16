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
  @Input() label = '';
  @Input() type = '';
  @Input() placeholder = '';
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

    return control.valid && control.touched && control.dirty;
  }
  isInValid() {
    let control = this.control;
    // if (key === 'username') console.log('undvalid', control.untouched);
    return control.invalid && control.touched && control.dirty;
  }
}
