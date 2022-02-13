import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
})
export class FormFieldComponent implements OnInit {
  @Input() type = '';
  @Input() label = '';
  @Input('control') group!: FormGroup;
  @Input() controllerName: string = '';
  constructor() {}

  ngOnInit(): void {
    // console.log(this.control.parent);
  }
  // or aplly this
  write(event: Event) {
    // console.log(event);
    let value = (event.target as HTMLInputElement).value;
    // this.control.setValue(value);
    // console.log(this.control);
    console.log(this.group);
  }
}
