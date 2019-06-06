import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login success',
  LoginFailure = '[Auth] Login failure',
  Logout = '[Auth] Logout'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(public payload: { email: string, password: string}) {}
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public payload: any) {}
}

export class LogInFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;
  constructor(public payload: any) {}
}

export class LogOut implements Action {
  readonly type = AuthActionTypes.Logout;
  constructor() {}
}

export type AuthActions =
 Login
 | LogInSuccess
 | LogInFailure
 | LogOut;
