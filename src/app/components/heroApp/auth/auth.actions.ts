import { IAppUser } from './auth.model';

export const LOGIN = '[auth] LOGIN';
export const LOGOUT = '[auth] LOGOUT';

interface LogInAction {
  type: typeof LOGIN;
  payload: IAppUser;
}

interface LogOutAction {
  type: typeof LOGOUT;
}

export type AuthActionsTypes = LogInAction | LogOutAction;

export const logIn = (payload: IAppUser): LogInAction => {
  return {
    type: LOGIN,
    payload,
  };
};

export const logOut = (): LogOutAction => {
  return {
    type: LOGOUT,
  };
};
