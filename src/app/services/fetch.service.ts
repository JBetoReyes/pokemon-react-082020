export type FetchStateType = 'loading' | 'success' | 'error';

export interface IFetchState<T> {
  data: T;
  state: FetchStateType;
}

export const fetchStateDefault = <T>(defaultData: T): IFetchState<T> => {
  return {
    data: defaultData,
    state: 'loading',
  };
};
