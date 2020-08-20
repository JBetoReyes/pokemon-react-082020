import React from 'react';
import './Todo.scss';
import { ITodo } from './Todo.model';

export type OwnProps = {
  todoData: ITodo;
};

const Todo = ({ todoData }: OwnProps): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { key, done, description } = todoData;

  return (
    <>
      <li key={key} className="list-group-item">
        <p className="m-5">{description}</p>
        <button type="submit" className="btn btn-danger">
          Delete
        </button>
      </li>
    </>
  );
};

export default Todo;
