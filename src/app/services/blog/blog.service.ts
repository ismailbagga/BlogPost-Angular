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

export class Blog {
  id: string = '';
  title: string = '';
  description: string = '';
  categorie: categories = 'AI';
  author_fullName: string = '';
  author_Username: string = '';
  lastUpdated: Date = new Date();
}
export class FullBlog extends Blog {
  content: string = '';
  visited: number = -1;
  shares: number = -1;
  likes: number = -1;
  interaction: { isLikedByUser: boolean; isSharedByUser: boolean } = {
    isLikedByUser: false,
    isSharedByUser: false,
  };
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
  modifyBlog(value: any) {
    const url = `${backendUrl}/modifyBlog`;
    return this.http.put(url, value);
  }
  constructor(private http: HttpClient) {}
  getBlogByTitle(title: string) {
    // console.log();

    const url = `${backendUrl}/blog`;
    const params = new HttpParams().set('t', title);
    return this.http.get<FullBlog>(url, { params: params });
  }
  postBlog(blog: PostBlog) {
    const url = `${backendUrl}/blog`;
    return this.http.post<Blog>(url, blog);
  }
  deleteBlog(UUID: string) {
    const url = `${backendUrl}/blog`;
    const params: HttpParams = new HttpParams().set('id', UUID);
    return this.http.delete(url, { params: params });
  }
  getMostVistedBlogs(page: number) {
    const url = `${backendUrl}/mostVisited/${page}`;
    return this.http.get<Blog[]>(url);
  }
  likeBLog(UUID: string) {
    const url = `${backendUrl}/like`;
    const params: HttpParams = new HttpParams().set('id', UUID);
    return this.http.put(url, {}, { params: params });
  }
  unlike(UUID: string) {
    const url = `${backendUrl}/unlike`;
    const params: HttpParams = new HttpParams().set('id', UUID);
    return this.http.put(url, {}, { params: params });
  }
  shareBLog(UUID: string) {
    const url = `${backendUrl}/share`;
    const params: HttpParams = new HttpParams().set('id', UUID);
    return this.http.put(url, {}, { params: params });
  }
  unShareBLog(UUID: string) {
    const url = `${backendUrl}/share`;
    const params: HttpParams = new HttpParams().set('id', UUID);
    return this.http.put(url, {}, { params: params });
  }
}
