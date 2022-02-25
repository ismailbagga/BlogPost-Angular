import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog, BlogService } from 'src/app/services/blog/blog.service';
export type Icon = {
  label: string;
  icon: string;
  text: string;
  linkState: { state: boolean; link: string };
};

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  blog!: Blog;
  isFound = true;
  icons: Icon[] = [];
  constructor(
    private blogService: BlogService,
    private route: Router,
    private activedRoute: ActivatedRoute
  ) {}
  getBlog(title: string) {
    return this.blogService.getBlogByTitle(title);
  }
  ngOnInit(): void {
    console.log('Hello');

    this.activedRoute.params.subscribe((value) => {
      const { id } = value;

      this.getBlog(id).subscribe({
        next: (value: Blog) => {
          console.log(value);
          this.blog = value;
          this.icons = [
            {
              label: 'Author',
              icon: 'bi bi-pen-fill',
              text: this.blog.author_fullName,
              linkState: { state: true, link: '/' + this.blog.author_Username },
            },
            {
              label: 'Visited',
              icon: 'bi bi-eye-fill',
              text: this.blog.visited?.toString() || '',
              linkState: { state: false, link: '' },
            },
            {
              label: 'Sharers',
              icon: 'bi bi-share-fill',
              text: this.blog.shares?.toString() || '',
              linkState: { state: false, link: '' },
            },
            {
              label: 'Likes',
              icon: 'bi bi-hand-thumbs-up-fill',
              text: this.blog.likes?.toString() || '',
              linkState: { state: false, link: '' },
            },
          ];
        },
        error: (error) => {
          this.route.navigateByUrl('error/notauthorize');
        },
      });
    });
  }
}
