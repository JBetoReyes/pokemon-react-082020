import TodoApp from '@components/hooks/Todo2/TodoApp.component';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from '@testing-library/react';
import { ITodoApp } from '@components/hooks/Todo2/todo.model';
import demoTodos2 from '../../fixtures/demoTodos2';

describe('TodoApp', () => {
  const wrapper = shallow(<TodoApp />);
  test('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Should add two items', () => {
    const todoComp = mount(<TodoApp />);
    act(() => {
      const handleAdd = todoComp.find('TodoAdd').prop('handleAdd') as (
        newTodo: ITodoApp
      ) => void;
      handleAdd(demoTodos2[0]);
      handleAdd(demoTodos2[1]);
    });
    expect(todoComp.find('h1').text().trim()).toBe('Todo App (2)');
  });
});
