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

    case AuthActionTypes.AddAuth: {
      return adapter.addOne(action.payload.auth, state);
    }

    case AuthActionTypes.UpsertAuth: {
      return adapter.upsertOne(action.payload.auth, state);
    }

    case AuthActionTypes.AddAuths: {
      return adapter.addMany(action.payload.auths, state);
    }

    case AuthActionTypes.UpsertAuths: {
      return adapter.upsertMany(action.payload.auths, state);
    }

    case AuthActionTypes.UpdateAuth: {
      return adapter.updateOne(action.payload.auth, state);
    }

    case AuthActionTypes.UpdateAuths: {
      return adapter.updateMany(action.payload.auths, state);
    }

    case AuthActionTypes.DeleteAuth: {
      return adapter.removeOne(action.payload.id, state);
    }

    case AuthActionTypes.DeleteAuths: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case AuthActionTypes.LoadAuths: {
      return adapter.addAll(action.payload.auths, state);
    }

    case AuthActionTypes.ClearAuths: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
