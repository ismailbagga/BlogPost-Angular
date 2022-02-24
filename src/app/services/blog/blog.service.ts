import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const backendUrl = `${environment.serverLink}/blogs`;
export interface Blog {
  id: string;
  title: string;
  description: string;
  categorie: string;
  content: string;
  visited: number;
  sharers: number;
  likes: number;
  author_fullName: string;
  authorUsername: string;
  lastUpdated: Date;
}
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
