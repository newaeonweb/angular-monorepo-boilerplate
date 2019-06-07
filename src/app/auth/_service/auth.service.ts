import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    return localStorage.setItem('token', token );
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    // get the token
    const token: string = this.getToken();
    if (token) {
      return true;
    }
    return false;
  }

  checkToken() {
    const token = this.getToken();
    if (token) {
      console.log('yes')
      const httpOptions = {
        headers: new HttpHeaders({
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        })
      };
      const url = `${this.API_URL}/status`;
      return this.http.get(url, httpOptions);
    }

  }

  login(email: string, password: string): Observable<any> {
    const url = `${this.API_URL}/login`;
    return this.http.post<User>(url, {email, password});
  }

}
