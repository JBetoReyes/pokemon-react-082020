import { IAppUser } from './auth/auth.model';
import { AuthActionsTypes } from './auth/auth.actions';

export interface IAppContext {
  user: IAppUser;
  setUser: React.Dispatch<AuthActionsTypes>;
}
