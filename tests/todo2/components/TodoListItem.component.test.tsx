import React from 'react';
import TodoListItem from '@components/hooks/Todo2/TodoListItem.component';
import { shallow } from 'enzyme';
import demoTodos2 from '../../fixtures/demoTodos2';

describe('TodoListItem', () => {
  const handleDelete = jest.fn();
  const handleTodo = jest.fn();
  const todoListItemJsx = (
    <TodoListItem
      todo={demoTodos2[0]}
      index={0}
      handleDelete={handleDelete}
      handleTodo={handleTodo}
    />
  );
  let wrapper = shallow(todoListItemJsx);
  beforeEach(() => {
    handleDelete.mockClear();
    handleTodo.mockClear();
    wrapper = shallow(todoListItemJsx);
  });
  test('Should match with snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('Should call the delete handler', () => {
    const deleteButton = wrapper.find('button');
    deleteButton.simulate('click');
    expect(handleDelete).toHaveBeenCalled();
    expect(handleDelete).toHaveBeenCalledWith(1);
  });
  test('Should call the handle toggle', () => {
    const p = wrapper.find('p');
    p.simulate('click');
    expect(handleTodo).toHaveBeenCalled();
    expect(handleTodo).toHaveBeenCalledWith(1);
  });
  test('Should have the correct label item', () => {
    const p = wrapper.find('p');
    expect(p.text()).toBe(`1. ${demoTodos2[0].description}`);
  });
  test('Should have the complete class', () => {
    wrapper = shallow(
      <TodoListItem
        todo={{ ...demoTodos2[0], done: true }}
        index={0}
        handleDelete={handleDelete}
        handleTodo={handleTodo}
      />
    );
    const p = wrapper.find('p');
    expect(p.hasClass('complete'));
  });
});
