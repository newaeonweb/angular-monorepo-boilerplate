import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './reducer';

// Example on how to use selectors
export const selectAuthState = createFeatureSelector<fromAuth.AuthState>(
  'auth'
);

export const selectIsAuthenticated = (state: fromAuth.AuthState) =>
  state.isAuthenticated;

export const getIsAuthenticated = createSelector(
  selectAuthState,
  selectIsAuthenticated
);
