import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAuth from './auth.reducer';

export interface State {

  auths: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {

  auths: fromAuth.reducer,
};

export const selectAuthState = createFeatureSelector<State>('auths');

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
