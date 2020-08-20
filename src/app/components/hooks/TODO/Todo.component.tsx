import React, { useReducer } from 'react';
import useForm from '@hooks/useForm';
import { AppSubmitEvent } from '@typings/htmlEvents';

export type ActionType = 'Add';

export interface IAction<T> {
  type: ActionType;
  payload: T;
}

export interface ITodo {
  key: number;
  done: boolean;
  description: string;
}

const TodoComponent = (): JSX.Element => {
  const { formData, handleChange, reset } = useForm({ newTodo: '' });
  const { newTodo } = formData;
  const todoReducer = (state: ITodo[], { type, payload }: IAction<ITodo>) => {
    switch (type) {
      case 'Add':
        return [...state, payload];
      default:
        return [];
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [todos, dispatchTodos] = useReducer(todoReducer, []);
  const onSubmit = (e: AppSubmitEvent) => {
    e.preventDefault();
    const payload: ITodo = {
      key: new Date().getTime(),
      done: false,
      description: newTodo,
    };
    dispatchTodos({
      type: 'Add',
      payload,
    });
    reset();
  };
  return (
    <>
      <h1>TODO List</h1>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-5  todo-list">
            <ol>
              {todos.map((todo) => (
                <li key={todo.key}>{todo.description}</li>
              ))}
            </ol>
          </div>
          <div className="col todo-form">
            <form onSubmit={onSubmit}>
              <input
                type="text"
                value={newTodo}
                name="newTodo"
                onChange={handleChange}
              />
              <button type="submit" className="mx-5 btn btn-primary">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoComponent;
