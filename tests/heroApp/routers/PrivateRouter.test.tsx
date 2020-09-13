import React from 'react';
import PrivateRoute from '@components/heroApp/routers/PrivateRoute';
import { MemoryRouter, RouteProps } from 'react-router-dom';
import { mount } from 'enzyme';

describe('PrivateRouter', () => {
  const props = {
    location: {
      pathname: '/marvel',
    },
  };
  beforeAll(() => {
    Storage.prototype.setItem = jest.fn();
  });
  afterAll(() => {
    (Storage.prototype.setItem as jest.Mock).mockRestore();
  });
  test('Should render the private component', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          {...(props as RouteProps)}
          isAuthenticated
          component={() => <span>test</span>}
        />
      </MemoryRouter>
    );
    expect(wrapper.find('span').exists()).toBe(true);
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
  });
});
