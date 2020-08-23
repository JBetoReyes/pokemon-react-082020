import React from 'react';
import Todo from '@components/hooks/TODO/TodoList.component';
import { shallow } from 'enzyme';

describe('Todo', () => {
  let todoWrapper = shallow(<Todo />);
  beforeEach(() => {
    todoWrapper = shallow(<Todo />);
  });
  test('Should match with the snapshot', () => {
    expect(todoWrapper).toMatchSnapshot();
  });
});
