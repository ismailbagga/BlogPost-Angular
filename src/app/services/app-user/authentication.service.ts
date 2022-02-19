import {
  HttpClient,
  HttpParams,
  JsonpClientBackend,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment';
type availableReq = { available: boolean };
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
  isAuthenticated$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  backendUrl = `${environment.serverLink}/users`;
  constructor(private http: HttpClient) {}
  signUp(user: SignUpRequest) {
    const url = `${this.backendUrl}/auth/register`;
    return this.http.post<string>(url, user);
  }
  emitLoginState(state: boolean) {
    this.isAuthenticated$.next(state);
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
    return this.http.put(url, load);
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
