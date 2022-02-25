import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/app-user/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  formControl = new FormControl('');
  isLogin = false;
  currentPage = 0;
  url = '';
  constructor(
    private route: Router,
    private authService: AuthenticationService
  ) {
    authService.getLoginStateAsObservable().subscribe((val) => {
      this.isLogin = val;
    });
  }

  ngOnInit(): void {
    this.route.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.url = val.url;
      }
    });
  }
  handleSearch() {}
}
