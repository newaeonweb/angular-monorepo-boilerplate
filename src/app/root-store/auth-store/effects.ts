import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, EMPTY } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';

import { AuthService } from '../../auth/_service/auth.service';
// import { AuthActionTypes, Login, LogInSuccess, LogInFailure, CheckStatusSuccess, CheckStatusFail } from './actions';
import * as fromAuth from './actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
    ) {}

  @Effect()
  LogIn: Observable<any> = this.actions$.pipe(
    ofType(fromAuth.AuthActionTypes.LOGIN),
    map((action: fromAuth.Login) => action.payload),
    switchMap(payload => {
      return this.authService.login(payload.email, payload.password).pipe(
        map((user) => {
          return new fromAuth.LogInSuccess({token: user.token, email: payload.email});
        }),
        catchError((err) => {
          console.log(err);
          return of(new fromAuth.LogInFailure({ error: err }));
        })
      );

    })
  );

  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions$.pipe(
    ofType(fromAuth.AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions$.pipe(
    ofType(fromAuth.AuthActionTypes.LOGIN_FAIL)
  );

  @Effect({ dispatch: false })
  public LogOut: Observable<any> = this.actions$.pipe(
    ofType(fromAuth.AuthActionTypes.LOGOUT),
    tap((user) => {
      localStorage.removeItem('token');
    })
  );

  @Effect()
  CheckStatus: Observable<any> = this.actions$.pipe(
    ofType(fromAuth.AuthActionTypes.CHECK_STATUS),
    switchMap(() => {
      if (this.authService.getToken()) {
        return this.authService.checkStatus().pipe(
          map((res) => {
            console.log('user', res)
            return new fromAuth.CheckStatusSuccess({token: res.user.token, email: res.user.email});
          }),
          catchError((err) => {
            console.log(err);
            return of(new fromAuth.CheckStatusFail(err.error));
          })
        );
      } else {
        return EMPTY;
      }
    })
  );


}
