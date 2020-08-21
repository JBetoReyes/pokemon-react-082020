export type ActionType = 'Add' | 'Delete';

export interface IAction<T> {
  type: ActionType;
  payload: T;
}

export interface IAddAction<T> extends IAction<T> {
  type: 'Add';
}

export interface IDeleteAction extends IAction<number> {
  type: 'Delete';
}

export interface ITodo {
  key: number;
  done: boolean;
  description: string;
}
