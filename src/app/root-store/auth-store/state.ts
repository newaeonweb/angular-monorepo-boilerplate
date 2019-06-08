import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromAuth from './reducer';

export interface AppState {

  auths: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<AppState> = {

  auths: fromAuth.authReducer,
};

export const selectAuthState = createFeatureSelector<AppState>('auths');

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
