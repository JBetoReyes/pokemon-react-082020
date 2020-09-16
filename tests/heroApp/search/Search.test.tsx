/* eslint-disable @typescript-eslint/no-explicit-any */
import SearchScreen from '@components/heroApp/Search/SearchScreen';
import { MemoryRouter, Route } from 'react-router-dom';
import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

describe('Search tests', () => {
  let mockHistory;
  beforeEach(() => {
    mockHistory = {
      push: jest.fn(),
    };
  });
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('Should match the snapshot', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route
          path="/search"
          component={() => <SearchScreen history={mockHistory} />}
        />
      </MemoryRouter>
    );
    expect(wrapper.find('.container-fluid')).toMatchSnapshot();
  });
  test('Should received the query params', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route
          path="/search"
          component={() => <SearchScreen history={mockHistory} />}
        />
      </MemoryRouter>
    );
    expect(wrapper.find('SearchScreen')).toMatchSnapshot();
    expect(wrapper.find('input').prop('value')).toBe('batman');
  });
  test('Should render the warning component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=noresult']}>
        <Route
          path="/search"
          component={() => <SearchScreen history={mockHistory} />}
        />
      </MemoryRouter>
    );
    act(() => {
      wrapper.find('form').prop('onSubmit')({ preventDefault() {} } as any);
    });
    wrapper.mount();
    expect(wrapper.find('.alert').exists()).toBe(true);
  });
  test('Should call the push function', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman1234']}>
        <Route
          path="/Search"
          component={() => <SearchScreen history={mockHistory} />}
        />
      </MemoryRouter>
    );
    act(() => {
      wrapper.find('input').simulate('change', {
        target: {
          name: 'query',
          value: 'batman',
        },
      });
    });
    wrapper.update();
    act(() => {
      wrapper.find('form').prop('onSubmit')({ preventDefault() {} } as any);
    });
    expect(mockHistory.push).toBeCalledWith('?q=batman');
  });
});
