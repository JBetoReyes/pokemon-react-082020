import todoReducer from '@app/components/hooks/TODO/todo.reducer';
import { ITodo, IAction } from '@components/hooks/TODO/Todo.model';
import demoTodos from '../fixtures/demoTodos';

describe('Todo reducer', () => {
  test('Should return the default value', () => {
    const noAction = {
      type: '',
    };
    const testTodos = JSON.parse(JSON.stringify(demoTodos));
    const result = todoReducer(testTodos, noAction as IAction<ITodo>);
    expect(result).toEqual(demoTodos);
  });
  test('Should add a todo element', () => {
    const newTodo = {
      key: 3,
      description: 'test todo 3',
      done: true,
    };
    const addAction: IAction<ITodo> = {
      type: 'Add',
      payload: newTodo,
    };
    const testTodos = JSON.parse(JSON.stringify(demoTodos));
    const result = todoReducer(testTodos, addAction);
    expect(result).toEqual([...demoTodos, newTodo]);
  });
  test('Should delete a todo element', () => {
    const todoToDelete: ITodo = {
      key: 2,
      description: 'test todo 2',
      done: true,
    };
    const deleteAction: IAction<ITodo> = {
      type: 'Delete',
      payload: todoToDelete,
    };
    const testTodos = JSON.parse(JSON.stringify(demoTodos));
    const result = todoReducer(testTodos, deleteAction);
    expect(result).toStrictEqual([demoTodos[0]]);
  });
});
