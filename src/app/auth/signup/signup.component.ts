import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  currNavIndex: number = 0;
  links = [
    { path: './', text: 'Register' },
    { path: 'verify', text: 'Code Verification' },
    { path: 'complete', text: 'Complete' },
  ];
  registerControl = new FormGroup({
    username: new FormControl('', Validators.maxLength(20)),
    email: new FormControl('', [Validators.email, Validators.required]),
    fullName: new FormControl('', [
      Validators.maxLength(20),
      Validators.required,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    confirm: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}
}
