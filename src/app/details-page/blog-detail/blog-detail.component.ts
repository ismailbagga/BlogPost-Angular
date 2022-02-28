import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/app-user/authentication.service';
import {
  Blog,
  BlogService,
  categoriesBadges,
  FullBlog,
} from 'src/app/services/blog/blog.service';
import { ExceptionsUtils } from 'src/app/Utils/ExceptionUtils';
export type Icon = {
  label: string;
  icon: string;
};
let icons = [
  {
    label: 'Author',
    icon: 'bi bi-pen-fill',
  },
  {
    label: 'Visited',
    icon: 'bi bi-eye-fill',
  },
  {
    label: 'Sharers',
    icon: 'bi bi-share-fill',
  },
  {
    label: 'Likes',
    icon: 'bi bi-hand-thumbs-up-fill',
  },
];

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent {
  blog: FullBlog = new FullBlog();
  isFound = true;
  isLogin = false;
  editMode = false;
  formGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    category: new FormControl('', Validators.required),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(200),
    ]),
    content: new FormControl('', Validators.required),
  });
  categories = categoriesBadges;
  icons: Icon[] = icons;
  isPostedByMe = false;
  content = { header: '', body: '', footer: '' };
  state = { state: 0, content: this.content };
  constructor(
    private authService: AuthenticationService,
    private blogService: BlogService,
    private route: Router,
    private activedRoute: ActivatedRoute
  ) {
    this.activedRoute.params.subscribe((value) => {
      const { id } = value;
      authService.getLoginStateAsObservable().subscribe((value) => {
        if (value) this.isLogin = value;
      });

      this.getBlog(id).subscribe({
        next: (value: FullBlog) => {
          console.log(value);
          this.blog = value;
          authService.username$.asObservable().subscribe((username) => {
            this.isPostedByMe = username === this.blog.author_Username;
          });
          this.getControler('category').setValue(this.blog.categorie);
          this.getControler('title').setValue(this.blog.title);
          this.getControler('description').setValue(this.blog.description);
          this.getControler('content').setValue(this.blog.content);
        },
        error: (error) => {
          this.route.navigateByUrl('error/notauthorize');
        },
      });
    });
  }
  getControler(key: string) {
    return this.formGroup.get(key) as FormControl;
  }
  getBlog(title: string) {
    return this.blogService.getBlogByTitle(title);
  }
  likeBLog() {
    this.blogService.likeBLog(this.blog.id).subscribe({
      next: (value) => {
        this.blog.interaction.isLikedByUser = true;
        this.blog.likes++;
        console.log(value);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  unlikeBlog() {
    this.blogService.unlike(this.blog.id).subscribe({
      next: (value) => {
        this.blog.interaction.isLikedByUser = false;
        this.blog.likes--;
        console.log(value);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  shareBlog() {
    this.blogService.shareBLog(this.blog.id).subscribe({
      next: (value) => {
        this.blog.interaction.isSharedByUser = true;
        this.blog.shares++;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  unShareBlog() {
    this.blogService.unShareBLog(this.blog.id).subscribe({
      next: (value) => {
        this.blog.interaction.isSharedByUser = false;
        this.blog.shares--;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  onShareIconClick() {
    if (this.blog.interaction.isSharedByUser) {
      this.unShareBlog();
    } else this.shareBlog();
  }
  onlikeIconClick() {
    console.log(this.blog.id);
    if (this.blog.interaction.isLikedByUser) {
      this.unlikeBlog();
    } else {
      this.likeBLog();
    }
  }

  deleteBlog() {
    this.blogService.deleteBlog(this.blog.id).subscribe({
      next: (value) => {
        console.log(value);
        this.route.navigateByUrl('');
      },
      error: (err) => {
        this.content.header = 'Ops Somethnig went Wrong';

        const {
          error: { message },
        } = err;
        if (message === ExceptionsUtils.BLOG_DOEST_NOT_EXIST) {
          this.content.header = 'We Could Not Find This Blog';
        } else if (message === ExceptionsUtils.UN_AUTHORIZE_OPERATION) {
          this.content.body =
            'Wow Wow you cant modify this blog its not yours relax man';
        } else {
          this.content.body = 'Internal Server Error Try Again Later';
        }
        this.state.state = -1;
      },
    });
  }
  hideAlert() {
    this.state.state = 0;
  }
  updateBlog() {
    if (!this.formGroup.valid) {
      return;
    }
    const value = { ...this.formGroup.value, id: this.blog.id };
    this.blogService.modifyBlog(value).subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (error) => {
        this.content.header = 'Ops Somethnig went Wrong';

        const {
          error: { message },
        } = error;
        if (message === ExceptionsUtils.BLOG_DOEST_NOT_EXIST) {
          this.content.header = 'We Could Not Find This Blog';
        } else if (message === ExceptionsUtils.UN_AUTHORIZE_OPERATION) {
          this.content.body =
            'Wow Wow you cant modify this blog its not yours relax man';
        } else {
          this.content.body = 'Internal Server Error Try Again Later';
        }
        this.state.state = -1;
      },
    });

    this.editMode = false;
  }
  enableEditMode() {
    if (this.isPostedByMe) {
      this.editMode = true;
    }
  }
  cancelEditMode() {
    this.getControler('title').setValue(this.blog.title);
    this.getControler('description').setValue(this.blog.description);
    this.getControler('category').setValue(this.blog.categorie);
    this.getControler('content').setValue(this.blog.content);
    this.editMode = false;
  }
}
