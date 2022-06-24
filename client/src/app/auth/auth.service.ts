import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURL = environment.API_URL;
  tokenKey = 'cms-nestjs';

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
      localStorage.setItem(this.tokenKey, serverObject.access_token);
    });
  }
}
