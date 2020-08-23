import { ITodo, IAction } from './Todo.model';

const todoReducer = (state: ITodo[], action: IAction<ITodo>): ITodo[] => {
  switch (action.type) {
    case 'Add':
      return [...state, action.payload];
    case 'Delete':
      return state.filter((todo) => todo.key !== action.payload.key);
    default:
      return [...state];
  }
};

export default todoReducer;
