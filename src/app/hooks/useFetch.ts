import { useState } from 'react';

export interface IFetchState<T> {
  loading: boolean;
  data: T | null;
  error?: Error | string;
}

const defaultState = <T>(): IFetchState<T> => ({
  loading: false,
  data: null,
});

const useFetch = <T>(url: string): IFetchState<T> => {
  const [state, setState] = useState<IFetchState<T>>(defaultState<T>());
  fetch(url)
    .then((response) => response.json())
    .then((data: T) =>
      setState({
        loading: true,
        data,
      })
    )
    .catch((e) => {
      setState({
        loading: false,
        data: state.data,
        error: e,
      });
    });
  return state;
};

export default useFetch;
