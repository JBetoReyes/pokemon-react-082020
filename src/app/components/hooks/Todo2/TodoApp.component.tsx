import React from 'react';
import TodoList from './TodoList.component';
import TodoAdd from './TodoAdd.component';

const TodoApp = (): JSX.Element => {
  return (
    <>
      <h1>Todo App</h1>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col">
            <TodoList />
          </div>
          <div className="col">
            <TodoAdd />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
