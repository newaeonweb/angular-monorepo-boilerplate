import { User } from '../_model/user';

export interface Auth {
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: string | null;
}
