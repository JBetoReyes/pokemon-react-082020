import AppContext from '@components/heroApp/app.context';
import { IAppContext } from '@components/heroApp/app.model';
import AppRouter from '@components/heroApp/AppRouter';
import { mount } from 'enzyme';
import React from 'react';

describe('AppRouter', () => {
  test('Should render the private routes', () => {
    const userContext: IAppContext = {
      setUser: jest.fn(),
      user: {
        logged: true,
      },
    };
    const wrapper = mount(
      <AppContext.Provider value={userContext}>
        <AppRouter />
      </AppContext.Provider>
    );
    expect(wrapper.find('nav').exists()).toBe(true);
  });
  test('Should render the public routes', () => {
    const userContext: IAppContext = {
      setUser: jest.fn(),
      user: {
        logged: false,
      },
    };
    const wrapper = mount(
      <AppContext.Provider value={userContext}>
        <AppRouter />
      </AppContext.Provider>
    );
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('h1').text()).toBe('Login Screen');
  });
});
