import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/app-user/authentication.service';
import { Blog, BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  images = [
    'assets/Reviews/rev1.jpeg',
    'assets/Reviews/rev2.jpeg',
    'assets/Reviews/rev3.jpeg',
  ];
  formControl = new FormControl('');
  isLogin = false;
  mostVisitedBlogs: Blog[] = [];
  constructor(
    private blogService: BlogService,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.authService.getLoginStateAsObservable().subscribe((value) => {
      this.isLogin = value;
    });
    this.blogService.getMostVistedBlogs(1).subscribe({
      next: (value) => {
        this.mostVisitedBlogs = value;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  explore() {
    console.log(this.formControl.value);
  }
}
