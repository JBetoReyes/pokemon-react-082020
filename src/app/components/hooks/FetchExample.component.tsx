import React from 'react';
import useFetch from '../../hooks/useFetch';
import useCounter from './useCounter';

const FetchExample = (): JSX.Element => {
  const baseUrl = process.env.BREAKING_BAD_API;
  const { state: counterState, increment, decrement } = useCounter(1);
  const { counter1 } = counterState;
  const { data, loading } = useFetch<IBreakingBadQuote>(
    `${baseUrl}quotes/${counter1}`
  );
  const { quote_id: quoteId, quote, author } = data;
  const quoteComponent = (
    <div className="">
      <h2 key={quoteId}>{quote}</h2>
      <h3>{author}</h3>
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
