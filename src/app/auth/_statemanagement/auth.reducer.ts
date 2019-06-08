import { AuthActions, AuthActionTypes } from './auth.actions';
import { User } from '../_model/user';

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: string | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

export function authReducer( state = initialState, action: AuthActions ): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
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

    case AuthActionTypes.LOGIN_FAIL: {
      return {
        ...state,
        errorMessage: 'Incorrect email and/or password.'
      };
    }

    case AuthActionTypes.LOGOUT: {
      return initialState;
    }

    case AuthActionTypes.CHECK_STATUS: {
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

    default: {
      return state;
    }
  }
}

