import React from 'react';
import { ITodoApp } from './todo.model';
import TodoListItem from './TodoListItem.component';

export type OwnPropsType = {
  todos: ITodoApp[];
  handleDelete: (id: number) => void;
  handleTodo: (id: number) => void;
};

const TodoList = ({
  todos,
  handleDelete,
  handleTodo,
}: OwnPropsType): JSX.Element => {
  return (
    <ol className="list-group list-group-flush">
      {todos.map((todo, index) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          index={index}
          handleDelete={handleDelete}
          handleTodo={handleTodo}
        />
      ))}
    </ol>
  );
};

export default TodoList;
