import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '@components/hooks/Todo2/TodoList.component';
import demoTodos2 from '../../fixtures/demoTodos2';

describe('TodoList', () => {
  const handleDelete = jest.fn();
  const handleTodo = jest.fn();
  const todoListJSX = (
    <TodoList
      todos={demoTodos2}
      handleDelete={handleDelete}
      handleTodo={handleTodo}
    />
  );
  let wrapper = shallow(todoListJSX);
  beforeEach(() => {
    handleDelete.mockClear();
    handleTodo.mockClear();
    wrapper = shallow(todoListJSX);
  });
  test('Should match with the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Should have two <TodoListItem /> components', () => {
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos2.length);
    expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(
      expect.any(Function)
    );
  });
});
