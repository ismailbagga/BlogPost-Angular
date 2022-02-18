import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
type availableReq = { available: boolean };

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  backendUrl = `${environment.serverLink}/users`;
  constructor(private http: HttpClient) {}
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
}
