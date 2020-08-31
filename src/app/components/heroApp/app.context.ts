import { createContext } from 'react';
import { IAppUser } from './auth/auth.model';
import { AuthActionsTypes } from './auth/auth.actions';

export interface IAppContext {
  setUser: React.Dispatch<AuthActionsTypes>;
  user: IAppUser;
}

const AppContext = createContext<Partial<IAppContext> | IAppContext>({});

export default AppContext;
