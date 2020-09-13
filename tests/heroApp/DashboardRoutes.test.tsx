import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import DashboardRoutes from '@components/heroApp/DashboardRoutes';
import AppContext from '@components/heroApp/app.context';
import { IAppContext } from '@components/heroApp/app.model';

describe('<DashboarRoutes> tests', () => {
  test('Should match with the snapshot', () => {
    const appContext: IAppContext = {
      setUser: jest.fn(),
      user: {
        name: 'test',
        logged: false,
      },
    };
    const wrapper = mount(
      <AppContext.Provider value={appContext}>
        <MemoryRouter>
          <DashboardRoutes />
        </MemoryRouter>
      </AppContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
