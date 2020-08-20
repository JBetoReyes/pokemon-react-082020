import React, { useReducer } from 'react';
import useForm from '@hooks/useForm';
import { AppSubmitEvent } from '@typings/htmlEvents';
import TodoItem from './Todo.component';
import { ITodo, IAction } from './Todo.model';

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
          <div className="col-6  todo-list">
            <ol className="list-group list-group-flush">
              {todos.map((todo) => (
                <TodoItem todoData={todo} />
              ))}
            </ol>
          </div>
          <div className="col-5 todo-form">
            <h4>Add TODO</h4>
            <hr />
            <form onSubmit={onSubmit}>
              <input
                className="form-control"
                type="text"
                value={newTodo}
                name="newTodo"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="mt-1 btn btn-outline-primary btn-block"
              >
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
