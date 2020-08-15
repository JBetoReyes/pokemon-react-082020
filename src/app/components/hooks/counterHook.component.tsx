import React from 'react';
import useCounter from './useCounter';

const counterHook = (): JSX.Element => {
  const { state, increment, decrement, reset } = useCounter();
  const { counter1, counter2, counter3 } = state;
  return (
    <>
      {counter1}
      {counter2}
      {counter3}
      <button type="button" onClick={increment}>
        + 1
      </button>
      <button type="button" onClick={decrement}>
        - 1
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
    </>
  );
};

export default counterHook;
