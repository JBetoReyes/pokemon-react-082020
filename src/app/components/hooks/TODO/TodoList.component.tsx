import React, { useReducer, useCallback, useEffect } from 'react';
import useForm from '@hooks/useForm';
import { AppSubmitEvent, AppClickEvent } from '@typings/htmlEvents';
import TodoItem from './Todo.component';
import { ITodo, IAction } from './Todo.model';
import todoReducer from './todo.reducer';

const TodoComponent = (): JSX.Element => {
  const { formData, handleChange, reset } = useForm({ newTodo: '' });
  const { newTodo } = formData;
  const init = () => {
    const persitedTodos = localStorage.getItem('todos');
    const todos = persitedTodos ? JSON.parse(persitedTodos) : [];
    return todos;
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [todos, dispatchTodos] = useReducer(todoReducer, [], init);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const handleDelete = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (key: number) => (e: AppClickEvent) => {
      const deleteAction: IAction<ITodo> = {
        type: 'Delete',
        payload: {
          description: '',
          key,
          done: true,
        },
      };
      dispatchTodos(deleteAction);
    },
    [dispatchTodos]
  );
  const onSubmit = (e: AppSubmitEvent) => {
    e.preventDefault();
    if (newTodo.trim().length === 0) {
      return;
    }
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
              {todos.map((todo, index) => (
                <TodoItem
                  key={todo.key}
                  todoData={todo}
                  index={index}
                  handleDelete={handleDelete}
                />
              ))}
            </ol>
          </div>
          <div className="col-5 todo-form">
            <h4>Add TODO</h4>
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
