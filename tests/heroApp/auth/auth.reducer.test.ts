import authReducer from '@components/heroApp/auth/auth.reducer';
import { IAppUser } from '@components/heroApp/auth/auth.model';
import { AuthActionsTypes } from '@components/heroApp/auth/auth.actions';

describe('authReducer', () => {
  const userState: IAppUser = {
    name: 'test',
    email: 'test@email.com',
    id: '1',
    logged: false,
  };
  test('Should return the default state', () => {
    expect(authReducer(userState, '' as any)).toEqual(userState);
  });
  test('Should authenticate and set the user', () => {
    const currState: IAppUser = {
      name: '',
      email: '',
      id: '1',
      logged: false,
    };
    const loginAction: AuthActionsTypes = {
      type: '[auth] LOGIN',
      payload: userState,
    };
    expect(authReducer(currState, loginAction)).toEqual({
      name: 'test',
      email: 'test@email.com',
      logged: true,
      id: '1',
    });
  });
  test('Should clean the state and set logged as false', () => {
    const logOutAction: AuthActionsTypes = {
      type: '[auth] LOGOUT',
    };
    expect(authReducer(userState, logOutAction)).toEqual({
      logged: false,
    });
  });
});
