import React from 'react';
import useForm from '@hooks/useForm';
import { AppSubmitEvent } from '@typings/htmlEvents';
import { upperFirst } from 'lodash';
import { ITodoForm, ITodoApp } from './todo.model';

export type OwnPropsType = {
  handleAdd: (todo: ITodoApp) => void;
};
const TodoAdd = ({ handleAdd }: OwnPropsType): JSX.Element => {
  const { formData, handleChange, reset } = useForm<ITodoForm>({
    description: '',
  });
  const { description } = formData;
  const handleSubmit = (e: AppSubmitEvent) => {
    e.preventDefault();
    if (description.trim().length === 0) {
      return;
    }
    const newTodo: ITodoApp = {
      id: new Date().getTime(),
      description: upperFirst(description),
      done: false,
    };
    handleAdd(newTodo);
    reset();
  };
  return (
    <>
      <h2>Add Todo</h2>
      <hr />
      <form className="form-group" onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Enter a TODO"
          onChange={handleChange}
          value={description}
          name="description"
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
