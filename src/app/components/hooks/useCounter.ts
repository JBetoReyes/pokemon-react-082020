import { useState, MouseEventHandler as _MouseEventHandler } from 'react';

type CounterState = {
  counter1: number;
  counter2: number;
  counter3: number;
};

type CounterHook = {
  state: CounterState;
  increment: _MouseEventHandler<HTMLElement>;
  decrement: _MouseEventHandler<HTMLElement>;
  reset: _MouseEventHandler<HTMLElement>;
};

const useCounter = (defaultValue = 0, minValue = 0): CounterHook => {
  const [state, setCounter] = useState({
    counter1: defaultValue,
    counter2: defaultValue,
    counter3: defaultValue,
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
      counter1: counter1 > minValue ? counter1 - 1 : minValue,
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
