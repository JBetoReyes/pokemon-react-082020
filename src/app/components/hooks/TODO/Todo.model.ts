export type ActionType = 'Add';

export interface IAction<T> {
  type: ActionType;
  payload: T;
}

export interface ITodo {
  key: number;
  done: boolean;
  description: string;
}
