import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURL = environment.API_URL;
  tokenKey = 'cms-nestjs';
  private token = null;

  constructor(private http: HttpClient) {}

  register(credentials: any) {
    const fullURL = `${this.baseURL}/users/register`;
    this.http.post<any>(fullURL, credentials).subscribe((createdUser) => {
      console.log('createdUser', createdUser);
    });
  }

  login(credentials: any) {
    const fullURL = `${this.baseURL}/auth/login`;
    this.http.post<any>(fullURL, credentials).subscribe((serverObject) => {
      console.log('serverObject', serverObject);
      this.token = serverObject.access_token;
      localStorage.setItem(this.tokenKey, serverObject.access_token);
    });
  }

  decodePayloadToken(token: any) {
    // @ts-ignore: Object is possibly 'null'.
    const payload = JSON.parse(atob(this.token.split('.')[1]));
    console.log('payload', payload);
    return payload;
  }

  get isAdmin() {
    if (!this.token) {
      return false;
    }
    const payload = this.decodePayloadToken(this.token);
    if (payload.role === 'admin') {
      return true;
    } else {
      return false;
    }
  }
}
