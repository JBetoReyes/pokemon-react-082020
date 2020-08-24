import { ITodoApp } from './todo.model';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: ITodoApp;
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: number;
}

interface CompleteTodoAction {
  type: typeof COMPLETE_TODO;
  playload: number;
}

export type TodoActionTypes =
  | AddTodoAction
  | DeleteTodoAction
  | CompleteTodoAction;

export const addTodo = (newTodo: ITodoApp): TodoActionTypes => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};

export const deleteTodo = (id: number): TodoActionTypes => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const completeTodo = (id: number): TodoActionTypes => {
  return {
    type: COMPLETE_TODO,
    playload: id,
  };
};
