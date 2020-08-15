import { useState, MouseEventHandler as _MouseEventHandler } from 'react';

type CounterState = {
  counter1: number;
  counter2: number;
  counter3: number;
};

type CounterHook = {
  state: CounterState;
  increment: _MouseEventHandler<HTMLButtonElement>;
  decrement: _MouseEventHandler<HTMLButtonElement>;
  reset: _MouseEventHandler<HTMLButtonElement>;
};
const useCounter = (): CounterHook => {
  const [state, setCounter] = useState({
    counter1: 0,
    counter2: 0,
    counter3: 0,
  });
  const { counter1 } = state;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const increment: _MouseEventHandler<HTMLButtonElement> = (e) => {
    setCounter({
      ...state,
      counter1: counter1 + 1,
    });
  };
  const decrement: _MouseEventHandler<HTMLButtonElement> = () => {
    setCounter({
      ...state,
      counter1: counter1 !== 0 ? counter1 - 1 : 0,
    });
  };
  const reset: _MouseEventHandler<HTMLButtonElement> = () => {
    setCounter({
      ...state,
      counter1: 0,
    });
  };

  return {
    state,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
