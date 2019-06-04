import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Auth } from './auth.model';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login success',
  LoginFailure = '[Auth] Login failure',
  Logout = '[Auth] Logout',
  LoadAuths = '[Auth] Load Auths',
  AddAuth = '[Auth] Add Auth',
  UpsertAuth = '[Auth] Upsert Auth',
  AddAuths = '[Auth] Add Auths',
  UpsertAuths = '[Auth] Upsert Auths',
  UpdateAuth = '[Auth] Update Auth',
  UpdateAuths = '[Auth] Update Auths',
  DeleteAuth = '[Auth] Delete Auth',
  DeleteAuths = '[Auth] Delete Auths',
  ClearAuths = '[Auth] Clear Auths'
}

export class LoadAuths implements Action {
  readonly type = AuthActionTypes.LoadAuths;

  constructor(public payload: { auths: Auth[] }) {}
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

export class AddAuth implements Action {
  readonly type = AuthActionTypes.AddAuth;

  constructor(public payload: { auth: Auth }) {}
}

export class UpsertAuth implements Action {
  readonly type = AuthActionTypes.UpsertAuth;

  constructor(public payload: { auth: Auth }) {}
}

export class AddAuths implements Action {
  readonly type = AuthActionTypes.AddAuths;

  constructor(public payload: { auths: Auth[] }) {}
}

export class UpsertAuths implements Action {
  readonly type = AuthActionTypes.UpsertAuths;

  constructor(public payload: { auths: Auth[] }) {}
}

export class UpdateAuth implements Action {
  readonly type = AuthActionTypes.UpdateAuth;

  constructor(public payload: { auth: Update<Auth> }) {}
}

export class UpdateAuths implements Action {
  readonly type = AuthActionTypes.UpdateAuths;

  constructor(public payload: { auths: Update<Auth>[] }) {}
}

export class DeleteAuth implements Action {
  readonly type = AuthActionTypes.DeleteAuth;

  constructor(public payload: { id: string }) {}
}

export class DeleteAuths implements Action {
  readonly type = AuthActionTypes.DeleteAuths;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearAuths implements Action {
  readonly type = AuthActionTypes.ClearAuths;
}

export type AuthActions =
 Login
 | LogInSuccess
 | LogInFailure
 | LogOut
 | LoadAuths
 | AddAuth
 | UpsertAuth
 | AddAuths
 | UpsertAuths
 | UpdateAuth
 | UpdateAuths
 | DeleteAuth
 | DeleteAuths
 | ClearAuths;
