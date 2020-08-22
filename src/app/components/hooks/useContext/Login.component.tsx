import React, { useContext } from 'react';
import { AppClickEvent } from '@typings/htmlEvents';
import { IAppUserContext } from './userContext.model';
import UserContext from './UserContext.component';

const Login = (): JSX.Element => {
  const userContext = useContext(UserContext) as IAppUserContext;
  const { setUser } = userContext;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = (e: AppClickEvent) => {
    setUser({
      name: 'beto',
      email: 'josereyes55@hotmail.com',
      id: 1,
    });
  };
  return (
    <>
      <h1>Login component</h1>
      <hr />
      <button type="button" onClick={handleClick}>
        Login
      </button>
    </>
  );
};

export default Login;
