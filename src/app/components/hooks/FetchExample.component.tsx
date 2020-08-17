import React from 'react';
import useFetch from '../../hooks/useFetch';
import useCounter from './useCounter';

const FetchExample = (): JSX.Element => {
  const baseUrl = process.env.BREAKING_BAD_API;
  const { state: counterState, increment, decrement } = useCounter(1, 1);
  const { counter1 } = counterState;
  const { data, loading } = useFetch<IBreakingBadQuote[]>(
    `${baseUrl}quotes/${counter1}`
  );
  let quoteData: IBreakingBadQuote = {
    quote_id: 0,
    quote: '',
    author: '',
  };
  if (!!data && data.length > 0) {
    [quoteData] = data as IBreakingBadQuote[];
  }
  const quoteComponent = (
    <div className="">
      <h2 key={quoteData.quote_id}>{quoteData.quote}</h2>
      <h3>{quoteData.author}</h3>
    </div>
  );
  return (
    <>
      <h1>Breaking bad quotes</h1>
      {loading ? 'loading' : quoteComponent}
      <button type="button" onClick={increment}>
        Next
      </button>
      <button type="button" onClick={decrement}>
        Previous
      </button>
    </>
  );
};

export default FetchExample;

export interface IBreakingBadQuote {
  quote_id: number;
  quote: string;
  author: string;
}
