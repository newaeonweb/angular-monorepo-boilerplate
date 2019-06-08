import { AuthStoreState } from './auth-store';

export interface RootState {
  auth: AuthStoreState.AppState;
}
