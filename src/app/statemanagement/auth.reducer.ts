import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Auth } from './auth.model';
import { AuthActions, AuthActionTypes } from './auth.actions';
import { User } from '../auth/_model/user';

export interface AuthState extends EntityState<Auth> {
  // additional entities state properties
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: string | null;
}

export const adapter: EntityAdapter<Auth> = createEntityAdapter<Auth>();

export const initialState: AuthState = adapter.getInitialState({
  // additional entity state properties
  isAuthenticated: false,
  user: null,
  errorMessage: null
});

export function authReducer( state = initialState, action: AuthActions ): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          email: action.payload.email
        },
        errorMessage: null
      };
    }

    case AuthActionTypes.LoginFailure: {
      return {
        ...state,
        errorMessage: 'Incorrect email and/or password.'
      };
    }

    case AuthActionTypes.Logout: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

