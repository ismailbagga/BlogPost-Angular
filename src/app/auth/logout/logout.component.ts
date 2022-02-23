import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/app-user/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(
    private route: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {}
  logout() {
    localStorage.removeItem('Authorization');
    this.authService.emitLoginState(false);
    this.route.navigate(['/']);
  }
}
