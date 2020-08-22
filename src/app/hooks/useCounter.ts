import { useState } from 'react';

export interface IUseCounter {
  counter: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounter = (initialValue = 0, minValue = 0): IUseCounter => {
  const [counter, setCounter] = useState<number>(initialValue);

  const increment = () => {
    setCounter((currValue) => currValue + 1);
  };

  const decrement = () => {
    setCounter((currValue) => {
      return currValue > minValue ? currValue - 1 : initialValue;
    });
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
