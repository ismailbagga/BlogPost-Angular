import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
const url = `${environment.serverLink}/users`;
const AUTHORIZATION = 'Authorization';
@Injectable()
export class AuthHttpInterceptorService implements HttpInterceptor {
  readonly jwtTokenUrl: string[] = [`${url}/verify`, `${url}/auth/login`];
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const clone = req.clone({
      setHeaders: {
        AUTHORIZATION: this.getToken(),
      },
    });

    return next.handle(clone).pipe(
      tap((value) => {
        const url = req.url;
        if (this.jwtTokenUrl.includes(url) && value instanceof HttpResponse) {
          this.handleJwtToken(value);
        }
      })
    );
  }
  getToken(): string {
    const value = localStorage.getItem(AUTHORIZATION);
    return value ? JSON.parse(value) : '';
  }
  handleJwtToken(value: HttpResponse<any>) {
    const token = value.headers.get(AUTHORIZATION);
    if (token) {
      document.cookie = `${AUTHORIZATION}=${token}`;
      localStorage.setItem(AUTHORIZATION, JSON.stringify(token));
    }
  }
}
