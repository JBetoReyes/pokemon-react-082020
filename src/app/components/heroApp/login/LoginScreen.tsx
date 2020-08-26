import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { AppClickEvent } from '@typings/htmlEvents';

type Props = RouteComponentProps;

const LoginScreen = ({ history }: Props): JSX.Element => {
  const btnWrapper = {
    width: '200px',
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = (e: AppClickEvent) => {
    history.replace('/marvel');
  };
  return (
    <>
      <h1>Login Screen</h1>
      <hr />
      <div style={btnWrapper}>
        <button
          type="button"
          className="btn btn-outline-primary m-5 btn-block"
          onClick={handleClick}
        >
          Log in
        </button>
      </div>
    </>
  );
};

export default LoginScreen;
