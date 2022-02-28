import {
  HttpClient,
  HttpParams,
  JsonpClientBackend,
} from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, map, tap } from 'rxjs';
import { loginReq } from 'src/app/auth/login/login.component';
import { environment } from 'src/environments/environment';
import { Blog } from '../blog/blog.service';
type availableReq = { available: boolean };
export type VerifieReq = { verifie: boolean; username: string };
type AuthenticatioState = { username?: string; isAuthenticated: boolean };
export class User {
  id: string = '';
  username: string = '';
  fullName: string = '';
  email: string = '';
  description: string = '';
  blogsShared: Blog[] = [];
  blogsLiked: Blog[] = [];
  blogsCreated: Blog[] = [];
}
export interface SignUpRequest {
  username: string;
  email: string;
  fullName: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  isAuthenticated$: BehaviorSubject<boolean | null> = new BehaviorSubject<
    boolean | null
  >(false);
  username$ = new BehaviorSubject<string>('');
  backendUrl = `${environment.serverLink}/users`;
  constructor(private http: HttpClient) {
    this.emitLoginState(null);
    this.isAuthenticated()
      .pipe(
        tap((value) => {
          console.log('check authentication', value);

          this.emitLoginState(value.isAuthenticated);
          this.emitUsername(value.username || '');
        })
      )
      .subscribe();
  }
  getAppUser(username: string) {
    const url = `${this.backendUrl}/user`;
    const params = new HttpParams().set('u', username);
    return this.http.get<User>(url, { params: params });
  }
  signUp(user: SignUpRequest) {
    const url = `${this.backendUrl}/auth/register`;
    return this.http.post<string>(url, user);
  }
  login(value: loginReq) {
    const url = `${this.backendUrl}/auth/login`;
    return this.http.post<any>(url, value);
  }
  isAuthenticated() {
    const url = `${this.backendUrl}/isAuthenticated`;
    return this.http.get<AuthenticatioState>(url);
  }
  emitLoginState(state: boolean | null) {
    this.isAuthenticated$.next(state);
  }
  emitUsername(username: string) {
    this.username$.next(username);
  }
  getLoginStateAsObservable() {
    return this.isAuthenticated$.asObservable();
  }
  isUniqueUsername(username: string) {
    const url = `${this.backendUrl}/info/exist`;
    let params = new HttpParams().set('u', username);
    return this.http.get<availableReq>(url, { params: params });
  }
  isUniqueEmail(email: string) {
    const url = `${this.backendUrl}/info/exist`;
    let params = new HttpParams().set('email', email);
    return this.http.get<availableReq>(url, { params: params });
  }
  verify(id: string, code: string) {
    const url = `${this.backendUrl}/verify`;
    const load = { uuid: id, code: code.toString() };
    return this.http.put<VerifieReq>(url, load);
  }
  ResendVerificationCode(uuid: string) {
    const url = `${this.backendUrl}/Resend`;
    let params = new HttpParams().set('uuid', uuid);
    return this.http.put<string>(
      url,
      {},
      {
        params: params,
      }
    );
  }
}
