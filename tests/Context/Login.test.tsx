import React from 'react';
import UserContext from '@components/hooks/useContext/UserContext.component';
import Login from '@components/hooks/useContext/Login.component';
import { mount } from 'enzyme';

describe('Login', () => {
  const user = {
    name: 'test name',
    email: 'test@gmail.com',
  };
  const state = {
    user,
    setUser: jest.fn(),
  };
  const loginJsx = (
    <UserContext.Provider value={state}>
      <Login />
    </UserContext.Provider>
  );
  let wrapper = mount(loginJsx);
  beforeEach(() => {
    wrapper = mount(loginJsx);
  });
  test('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
