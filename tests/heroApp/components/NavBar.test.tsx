/* eslint-disable @typescript-eslint/no-explicit-any */
import AppContext from '@components/heroApp/app.context';
import { IAppContext } from '@components/heroApp/app.model';
import NavBar from '@components/heroApp/components/NavBar';
import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Router } from 'react-router-dom';

describe('Navbar component tests', () => {
  let userContext: IAppContext = {
    setUser: jest.fn(),
    user: { logged: true, name: 'test' },
  };
  let historyMock = {
    push: jest.fn(),
    location: {},
    replace: jest.fn(),
    listen: jest.fn(),
    createHref: jest.fn(),
  };
  let wrapper = mount(
    <AppContext.Provider value={userContext}>
      <MemoryRouter>
        <Router history={historyMock as any}>
          <NavBar />
        </Router>
      </MemoryRouter>
    </AppContext.Provider>
  );
  beforeEach(() => {
    userContext = {
      setUser: jest.fn(),
      user: { logged: true, name: 'test' },
    };
    historyMock = {
      push: jest.fn(),
      location: {},
      replace: jest.fn(),
      listen: jest.fn(),
      createHref: jest.fn(),
    };
    wrapper = mount(
      <AppContext.Provider value={userContext}>
        <MemoryRouter>
          <Router history={historyMock as any}>
            <NavBar />
          </Router>
        </MemoryRouter>
      </AppContext.Provider>
    );
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('Should match with the snapshot', () => {
    expect(wrapper.find('nav.navbar')).toMatchSnapshot();
  });
  test('Should clean the user and navigates to the login page when loging out', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    wrapper.find('button').prop('onClick')({} as any);
    expect(userContext.setUser).toHaveBeenCalledTimes(1);
    expect(userContext.setUser).toHaveBeenCalledWith({ type: '[auth] LOGOUT' });
    expect(historyMock.replace).toHaveBeenCalled();
    expect(historyMock.replace).toHaveBeenCalledWith('/login');
  });
});
