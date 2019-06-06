import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = this.authService.getToken();

    if (token) {
      const authRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log('interceptor running with new headers');

      return next.handle(authRequest);
      // .pipe(
      //   tap((event: HttpEvent<any>) => {
      //     if (event instanceof HttpResponse) {
      //       // Response wiht HttpResponse type
      //       console.log('TAP function', event);

      //     }
      //   }, (err: any) => {
      //     console.log(err);
      //     if (err instanceof HttpErrorResponse) {
      //       if (err.status === 401) {
      //         localStorage.removeItem('token');
      //         this.router.navigate(['/']);
      //       }
      //     }
      //   })
      // );

    } else {
      console.log('interceptor without changes');
      return next.handle(request);
    }

  }
}
