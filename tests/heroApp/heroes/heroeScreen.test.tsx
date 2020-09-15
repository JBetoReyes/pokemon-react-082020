/* eslint-disable @typescript-eslint/no-explicit-any */
import HeroScreen from '@components/heroApp/heroes/HeroScreen';
import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

describe('heroe screen tests', () => {
  test('Should match the snapshot', () => {
    const mockHistory = {
      push: jest.fn(),
      goBack: jest.fn(),
      length: 3,
    };
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroes']}>
        <HeroScreen history={mockHistory as any} />
      </MemoryRouter>
    );
    expect(wrapper.find('Redirect')).toMatchSnapshot();
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });
  test('Should render the heroe data', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route path="/hero/:heroId" component={HeroScreen} />
      </MemoryRouter>
    );
    expect(wrapper.find('.row').exists()).toBe(true);
  });
  test('Should push the root path if the history length is less or equal two', () => {
    const mockHistory = {
      push: jest.fn(),
      goBack: jest.fn(),
      length: 2,
    };
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroScreen history={mockHistory as any} />}
        />
      </MemoryRouter>
    );
    wrapper.find('button').simulate('click');
    expect(mockHistory.push).toBeCalledWith('/');
  });
  test('Should go back to the previous screen', () => {
    const mockHistory = {
      push: jest.fn(),
      goBack: jest.fn(),
      length: 3,
    };
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider']}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroScreen history={mockHistory as any} />}
        />
      </MemoryRouter>
    );
    wrapper.find('button').prop('onClick')({} as any);
    expect(mockHistory.goBack).toHaveBeenCalled();
  });
  test('Should not render the coomponent with an invalid id', () => {
    const mockHistory = {
      push: jest.fn(),
      goBack: jest.fn(),
      length: 3,
    };
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/marvel-spider1']}>
        <Route
          path="/hero/:heroId"
          component={() => <HeroScreen history={mockHistory as any} />}
        />
      </MemoryRouter>
    );
    expect(wrapper.find('.row').exists()).toBe(false);
  });
});
