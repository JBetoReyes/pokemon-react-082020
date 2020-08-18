import React, { useState, useCallback } from 'react';
import { AppClickEvent } from '@typings/htmlEvents';
import MemoButton from './MemoButton.component';

const MemoExample = (): JSX.Element => {
  const [counter, setCounter] = useState(0);
  const increment = useCallback(
    (incrementValue = 1) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      return (e: AppClickEvent) =>
        setCounter((counterValue) => counterValue + incrementValue);
    },
    [setCounter]
  );
  const buttons = [1, 10, 20, 30, 40, 50];
  return (
    <>
      <h1>Memo Example</h1>
      <hr />
      <p>
        Counter:
        {counter}
      </p>
      {buttons.map((buttonLabel) => (
        <MemoButton
          key={buttonLabel}
          incrementValue={buttonLabel}
          increment={increment}
        />
      ))}
    </>
  );
};

export default MemoExample;
