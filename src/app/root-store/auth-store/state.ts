import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromAuth from './reducer';

export interface AppState {
  auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

// export const selectAuthState = createFeatureSelector<AppState>('auth');
export const selectAuthState = createFeatureSelector<fromAuth.AuthState>(
  'auth'
);

export const selectIsLogged = (state: fromAuth.AuthState) =>
  state.isAuthenticated;

export const selectIsLoggedIn = createSelector(
  selectAuthState,
  selectIsLogged
);
