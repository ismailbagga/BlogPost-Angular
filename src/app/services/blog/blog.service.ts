import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const backendUrl = `${environment.serverLink}/blogs`;
type categories = 'AI' | 'POLITICS' | 'EDUCATION' | 'TECHNOLOGIES';

export interface PostBlog {
  title: string;
  description: string;
  conent: string;
  category: categories;
}

export interface Blog {
  id: string;
  title: string;
  description: string;
  categorie: categories;
  content?: string;
  visited?: number;
  shares?: number;
  likes?: number;
  author_fullName: string;
  author_Username: string;
  lastUpdated: Date;
}
export const categoriesBadges = {
  AI: 'primary',
  EDUCATION: 'success',
  POLITICS: 'dark',
  TECHNOLOGIES: 'danger',
};
@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}
  getBlogByTitle(title: string) {
    // console.log();

    const url = `${backendUrl}/blog`;
    const params = new HttpParams().set('t', title);
    return this.http.get<Blog>(url, { params: params });
  }
  postBlog(blog: PostBlog) {
    const url = `${backendUrl}/blog`;
    return this.http.post<Blog>(url, blog);
  }
  getMostVistedBlogs(page: number) {
    const url = `${backendUrl}/mostVisited/${page}`;
    return this.http.get<Blog[]>(url);
  }
}
