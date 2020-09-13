import PublicRoute from '@components/heroApp/routers/PublicRoute';
import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('PublicRoute', () => {
  test('Should render the public component', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PublicRoute
          isAuthenticated={false}
          component={() => <span>test</span>}
        />
      </MemoryRouter>
    );
    expect(wrapper.find('span').exists()).toBe(true);
  });
  test('Should not render the public component', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PublicRoute isAuthenticated component={() => <span>test</span>} />
      </MemoryRouter>
    );
    expect(wrapper.find('span').exists()).toBe(false);
  });
});
