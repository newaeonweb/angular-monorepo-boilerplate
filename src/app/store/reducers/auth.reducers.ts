import { User } from '../../pages/auth/_model/user';
import { AuthActionTypes, All } from '../actions/auth.actions';

export interface State {
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: string | null;
}

// set the initial state with localStorage
export const initialState: State = {
  // isAuthenticated: localStorage.getItem('token') !== null,
  // user: {
  //         token: localStorage.getItem('token'),
  //         email: localStorage.getItem('email')
  //       },
  // errorMessage: null
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

export function reducer(state = initialState, action: All): State {
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
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: 'Wrong credentials.'
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
