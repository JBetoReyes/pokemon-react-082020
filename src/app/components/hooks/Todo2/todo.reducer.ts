/* eslint-disable default-case */
import { ITodoApp } from './todo.model';
import {
  TodoActionTypes,
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
} from './todo.actions';

const initialState: ITodoApp[] = [];

const todoReducer = (
  state: ITodoApp[] = initialState,
  action: TodoActionTypes
): ITodoApp[] => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case COMPLETE_TODO:
      return state.map((todo) => {
        if (todo.id === action.playload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return {
          ...todo,
        };
      });
    default:
      return state;
  }
};

export default todoReducer;
