import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAIL = '[Auth] Login failure',
  LOGOUT = '[Auth] Logout',
  CHECK_STATUS = '[Auth] Check Status',
  CHECK_STATUS_SUCCESS = '[Auth] Status Success',
  CHECK_STATUS_FAIL = '[Auth] Status Failure',
}

export class Login implements Action {
  readonly type = AuthActionTypes.LOGIN;
  constructor(public payload: { email: string; password: string }) {}
}

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

export class LogInFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAIL;
  constructor(public payload: any) {}
}

export class LogOut implements Action {
  readonly type = AuthActionTypes.LOGOUT;
  constructor() {}
}

export class CheckStatus implements Action {
  readonly type = AuthActionTypes.CHECK_STATUS;
  constructor(public payload?: any) {}
}

export class CheckStatusSuccess implements Action {
  readonly type = AuthActionTypes.CHECK_STATUS_SUCCESS;
  constructor(public payload?: any) {}
}

export class CheckStatusFail implements Action {
  readonly type = AuthActionTypes.CHECK_STATUS_FAIL;
  constructor(public payload?: any) {}
}

export type AuthActions =
  | Login
  | LogInSuccess
  | LogInFailure
  | LogOut
  | CheckStatus
  | CheckStatusSuccess
  | CheckStatusFail;
