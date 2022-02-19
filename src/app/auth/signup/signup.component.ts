import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/app-user/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  authService: AuthenticationService;
  constructor(authService: AuthenticationService, private route: Router) {
    this.authService = authService;
  }
  ngOnInit(): void {
    this.authService.getLoginStateAsObservable().subscribe((state) => {
      console.log(state);

      if (state) {
        this.route.navigateByUrl('');
      }
    });
  }
}
