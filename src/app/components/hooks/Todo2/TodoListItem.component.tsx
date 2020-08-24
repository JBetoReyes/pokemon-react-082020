/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { AppClickEvent } from '@typings/htmlEvents';
import { ITodoApp } from './todo.model';
import './todo.scss';

export type OwnPropsType = {
  todo: ITodoApp;
  index: number;
  handleDelete: (id: number) => void;
  handleTodo: (id: number) => void;
};
const TodoListItem = ({
  todo,
  index,
  handleDelete,
  handleTodo,
}: OwnPropsType): JSX.Element => {
  const { description, done, id } = todo;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDeleteClick = (e: AppClickEvent) => {
    handleDelete(id);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleTodo = (e: AppClickEvent) => {
    handleTodo(id);
  };
  return (
    <>
      <li className="list-group-item">
        <p
          onClick={toggleTodo}
          className={`m-5 ${done ? 'todo-item--completed' : ''}`}
        >
          {`${index + 1}. ${description}`}
        </p>
        <button
          className="btn btn-outline-danger"
          type="button"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default TodoListItem;
