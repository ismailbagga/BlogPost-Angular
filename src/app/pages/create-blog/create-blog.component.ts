import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Blog,
  BlogService,
  categoriesBadges,
  PostBlog,
} from 'src/app/services/blog/blog.service';
import { ExceptionsUtils } from 'src/app/Utils/ExceptionUtils';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css'],
})
export class CreateBlogComponent implements OnInit {
  addBlogForms = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    category: new FormControl('', Validators.required),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(200),
    ]),
    content: new FormControl('', Validators.required),
  });
  content = { header: '', body: '', footer: '' };
  state = { state: 0, content: this.content };
  categories = categoriesBadges;
  title = '';
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {}
  savePost(event: Event) {
    event.preventDefault;
    this.state.state = 0;
    if (this.addBlogForms.invalid) {
      return;
    }
    const blog: PostBlog = this.addBlogForms.value;
    console.log(blog);

    this.blogService.postBlog(blog).subscribe({
      next: (value: Blog) => {
        const id = value.title;
        this.content.header = 'Well Done !';
        this.content.body = 'bla bla bla bla blaaaa blab albalbabalb la ';
        this.content.footer = 'to visit the blog click link below ';
        this.title = id;
        this.state.state = 1;
      },
      error: (error) => {
        this.content.header = 'Ops Something Went Wrong !';
        const {
          error: { message },
        } = error;
        if (message === ExceptionsUtils.BLOG_TITLE_EXIST) {
          this.content.body =
            'change title it already been used on another blog';
        } else {
          this.content.body = 'Something went wrong with app try again later';
        }
        this.content.footer = 'Please Try Again';
        this.state.state = -1;
      },
    });
  }
  getControler(key: string) {
    return this.addBlogForms.get(key) as FormControl;
  }
  colorizeAlert() {
    if (this.state.state == 0) return '';
    else if (this.state.state == 1) return 'success';
    else return 'danger';
  }
  hideAlert() {
    console.log('close from th parent');

    this.state.state = 0;
  }
}
