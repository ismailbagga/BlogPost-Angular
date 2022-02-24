import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  mostVisitedBlogs: Blog[] = [];
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    // ({next : ,error : })
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
