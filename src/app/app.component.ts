import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/app-user/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'BlogPost';
  constructor(private authService: AuthenticationService) {}
  ngOnInit(): void {
    this.check();
  }
  check() {
    this.authService.isAuthenticated().subscribe((value: boolean) => {
      this.authService.emitLoginState(value);
    });
  }
}
