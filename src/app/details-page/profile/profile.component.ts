import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  AuthenticationService,
  User,
} from 'src/app/services/app-user/authentication.service';
import { UniqueEmailValidatorService } from 'src/app/services/AsyncValidatorsImpl/unique-email-validator.service';
import { MatchPasswordService } from 'src/app/services/ValidatorsImpl/match-password.service';
import { FormsControlUtils } from 'src/app/Utils/ValidatorsUtils';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  cuuPageIndex = 0;
  user: User = new User();

  constructor(
    private route: ActivatedRoute,
    private authService: AuthenticationService
  ) {
    this.route.params.subscribe((val) => {
      const { username } = val;
      console.log(username);
      this.authService.getAppUser(username).subscribe({
        next: (val) => {
          this.user = val;
        },
        error: (err) => {
          console.log(err);
        },
      });
    });
  }
  extracFields() {
    return FormsControlUtils.retrieveFields();
  }
  getControler(key: string) {
    return;
  }
  ngOnInit(): void {}
}
