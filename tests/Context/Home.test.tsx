import UserContext from '@components/hooks/useContext/UserContext.component';
import Home from '@components/hooks/useContext/Home.component';

import React from 'react';
import { mount } from 'enzyme';

describe('AppComponent', () => {
  const user = {
    name: 'test name',
    email: 'test@gmail.com',
  };
  const state = {
    user,
    setUser: jest.fn(),
  };
  const appJsx = (
    <UserContext.Provider value={state}>
      <Home />
    </UserContext.Provider>
  );
  let wrapper = mount(appJsx);
  beforeEach(() => {
    wrapper = mount(appJsx);
  });
  test('Should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
