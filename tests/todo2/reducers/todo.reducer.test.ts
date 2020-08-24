import todoReducer from '@components/hooks/Todo2/todo.reducer';
import {
  addTodo,
  deleteTodo,
  completeTodo,
} from '@components/hooks/Todo2/todo.actions';
import { ITodoApp } from '@components/hooks/Todo2/todo.model';
import demoTodos2 from '../../fixtures/demoTodos2';

describe('todo', () => {
  test('Should Add a todo', () => {
    const newTodo: ITodoApp = {
      id: 3,
      description: 'test todo 3',
      done: false,
    };
    const result = todoReducer(demoTodos2, addTodo(newTodo));
    expect(result).toEqual([...demoTodos2, newTodo]);
  });
  test('Should delete a todo', () => {
    const result = todoReducer(demoTodos2, deleteTodo(2));
    expect(result).toEqual([demoTodos2[0]]);
  });
  test('Should change the done state', () => {
    const result = todoReducer(demoTodos2, completeTodo(1));
    expect(result[0].done).toBe(true);
  });
});
