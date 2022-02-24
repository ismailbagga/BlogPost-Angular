import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const backendUrl = `${environment.serverLink}/blogs`;
type categories = 'AI' | 'POLITICS' | 'EDUCATION';
export interface Blog {
  id: string;
  title: string;
  description: string;
  categorie: categories;
  content: string;
  visited: number;
  sharers: number;
  likes: number;
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
  getMostVistedBlogs(page: number) {
    const url = `${backendUrl}/mostVisited/${page}`;
    return this.http.get<Blog[]>(url);
  }
}
