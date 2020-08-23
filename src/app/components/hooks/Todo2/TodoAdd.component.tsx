import React from 'react';
import useForm from '@hooks/useForm';
import { ITodoApp } from './Todo.model';

const TodoAdd = (): JSX.Element => {
  const {} = useForm<ITodoApp>({});
  return (
    <>
      <h2>Add Todo</h2>
      <hr />
      <form className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Enter a TODO"
        />
        <button
          className="btn btn-outline-primary btn-block mt-3"
          type="submit"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default TodoAdd;
