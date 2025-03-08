import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';
  private readonly TOKEN_KEY = 'auth_token';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: any): Observable<any> {
    console.log('AuthService - Login attempt with:', credentials.email);
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        console.log('AuthService - Login response:', response);
        if (response?.token) {
          const tokenWithBearer = `Bearer ${response.token}`;
          console.log('AuthService - Setting token:', tokenWithBearer);
          this.setToken(tokenWithBearer);
          console.log('AuthService - Token after set:', this.getToken());
        }
      })
    );
  }

  private setToken(token: string): void {
    // localStorage.setItem(this.TOKEN_KEY, token);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.TOKEN_KEY, token);
    } else {
      console.warn('localStorage is not available');
    }
  }

  getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(this.TOKEN_KEY);
    } else {
      console.warn('localStorage is not available');
      return null;
    }
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
    // return !!this.getToken();
  }

  logout(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(this.TOKEN_KEY);
    } else {
      console.warn('localStorage is not available');
    }
  }
}
