import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/app-user/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'BlogPost';
  constructor() {}
  ngOnInit(): void {}
}
