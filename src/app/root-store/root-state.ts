import { AuthStoreState } from './auth-store';

// Add all application module states here
export interface RootState {
  auth: AuthStoreState.AppState;
}
