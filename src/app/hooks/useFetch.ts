import { useState, useEffect } from 'react';

export interface IFetchState<T> {
  loading: boolean;
  data: T | null;
  error?: Error | string;
}

const defaultState = <T>(): IFetchState<T> => ({
  loading: true,
  data: null,
});

const useFetch = <T>(url: string): IFetchState<T> => {
  const [state, setState] = useState<IFetchState<T>>(defaultState<T>());
  useEffect(() => {
    setState(defaultState<T>());
    fetch(url)
      .then((response) => response.json())
      .then((data: T) =>
        setState({
          loading: false,
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
  }, [url]);
  return state;
};

export default useFetch;
