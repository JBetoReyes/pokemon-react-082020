import React from 'react';
import { AppClickEvent } from '@typings/htmlEvents';

export type OwnProps = {
  incrementValue: number;
  increment: (incrementValue: number) => (e: AppClickEvent) => void;
};

const MemoButton = React.memo(
  ({ incrementValue, increment }: OwnProps): JSX.Element => {
    const buttonStyles = {
      margin: '5px',
    };
    // eslint-disable-next-line no-console
    console.log('Rendering buttos: ', incrementValue);
    return (
      <div className="">
        <button
          type="button"
          style={buttonStyles}
          onClick={increment(incrementValue)}
        >
          {incrementValue}
        </button>
      </div>
    );
  }
);

export default MemoButton;
