import { AuthActionsTypes, LOGIN, LOGOUT } from './auth.actions';
import { IAppUser } from './auth.model';

export const authReducer = (
  state: IAppUser,
  action: AuthActionsTypes
): IAppUser => {
  switch (action.type) {
    case LOGIN:
      return {
        ...action.payload,
        logged: true,
      };
    case LOGOUT:
      return {
        logged: false,
      };
    default:
      return { ...state };
  }
};

export default authReducer;
