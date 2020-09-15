import AppContext from '@components/heroApp/app.context';
import { IAppContext } from '@components/heroApp/app.model';
import LoginScreen from '@components/heroApp/login/LoginScreen';
import { mount } from 'enzyme';
import React from 'react';

describe('LoginScreen tests', () => {
  let appContext: IAppContext;
  let history;

  beforeEach(() => {
    appContext = {
      setUser: jest.fn(),
      user: {
        logged: false,
      },
    };
    history = {
      push: jest.fn,
      replace: jest.fn,
    };
  });
  afterAll(() => {
    jest.resetAllMocks();
  });

  test('Should match the snapshot', () => {
    const wrapper = mount(
      <AppContext.Provider value={appContext}>
        <LoginScreen history={history} />
      </AppContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
