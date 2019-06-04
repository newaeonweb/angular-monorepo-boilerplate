import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private BASE_URL = 'http://localhost:1337';

  constructor(private http: HttpClient) { }

  getToken(): string {
    return localStorage.getItem('token');
  }

  login(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/login`;
    return this.http.post<User>(url, {email, password});
  }

}
