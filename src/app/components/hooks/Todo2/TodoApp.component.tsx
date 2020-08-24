import React, { useReducer, useEffect } from 'react';
import TodoList from './TodoList.component';
import TodoAdd from './TodoAdd.component';
import { ITodoApp } from './todo.model';
import { addTodo, deleteTodo, completeTodo } from './todo.actions';
import todoReducer from './todo.reducer';

const init = () => {
  const storedTodos = localStorage.getItem('todos');
  return storedTodos ? JSON.parse(storedTodos) : [];
};

const TodoApp = (): JSX.Element => {
  const [todos, todoDispatch] = useReducer(todoReducer, [], init);
  useEffect(() => localStorage.setItem('todos', JSON.stringify(todos)), [
    todos,
  ]);
  const handleAdd = (todo: ITodoApp) => {
    todoDispatch(addTodo(todo));
  };
  const handleDelete = (id: number) => {
    todoDispatch(deleteTodo(id));
  };
  const handleTodo = (id: number) => {
    todoDispatch(completeTodo(id));
  };
  return (
    <>
      <h1>Todo App</h1>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col">
            <TodoList
              todos={todos}
              handleDelete={handleDelete}
              handleTodo={handleTodo}
            />
          </div>
          <div className="col">
            <TodoAdd handleAdd={handleAdd} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
