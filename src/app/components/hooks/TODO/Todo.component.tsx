import React from 'react';
import './Todo.scss';
import { AppClickEvent } from '@typings/htmlEvents';
import { ITodo } from './Todo.model';

export type OwnProps = {
  todoData: ITodo;
  index: number;
  handleDelete: (key: number) => (e: AppClickEvent) => void;
};

const Todo = React.memo(
  ({ todoData, index, handleDelete }: OwnProps): JSX.Element => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { key, done, description } = todoData;
    return (
      <>
        <li key={key} className={`list-group-item ${done && 'complete'}`}>
          {`${index + 1}. `}
          <p className="m-5">{description}</p>
          <button
            type="submit"
            className="btn btn-danger"
            onClick={handleDelete(key)}
          >
            Delete
          </button>
        </li>
      </>
    );
  }
);

export default Todo;
