import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../../_models/user';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem('token');
  }

  setToken(token: string): void {
    return localStorage.setItem('token', token);
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    const token: string = this.getToken();
    if (token) {
      return true;
    }
    return false;
  }

  checkStatus(): Observable<any> {
    console.warn('fired on refresh page');
    const url = `${this.API_URL}/token-refresh`;
    return this.http.get<any>(url).pipe(
      // map((response) => {
      //   console.log(response);
      //   return response;
      // }),
      catchError(error => this.handleError(error))
    );
  }

  login(email: string, password: string): Observable<any> {
    const url = `${this.API_URL}/login`;
    return this.http.post<User>(url, { email, password });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side error.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend error.
      return throwError(error);
    }
    // return a custom error message
    return throwError(
      'Ohps something wrong happen here; please try again later.'
    );
  }
}
