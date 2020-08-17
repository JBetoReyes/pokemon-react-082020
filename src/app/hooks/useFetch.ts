import { useState, useEffect } from 'react';
import useComponentMounted from './useComponentMounted';

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
  const isMounted = useComponentMounted();
  useEffect(() => {
    setState(defaultState<T>());
    fetch(url)
      .then((response) => response.json())
      .then((data: T) => {
        if (isMounted.current) {
          setState({
            loading: false,
            data,
          });
        } else {
          // eslint-disable-next-line no-console
          console.warn("State wasn't set as component is unmounted");
        }
      })
      .catch((e) => {
        if (isMounted) {
          setState({
            loading: false,
            data: state.data,
            error: e,
          });
        } else {
          // eslint-disable-next-line no-console
          console.warn("State wasn't set as component is unmounted");
        }
      });
  }, [url]);
  return state;
};

export default useFetch;
