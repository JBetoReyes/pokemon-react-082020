import React, { useContext } from 'react';
import { AppClickEvent } from '@typings/htmlEvents';
import { History } from 'history';
import AppContext, { IAppContext } from '../app.context';
import { logIn } from '../auth/auth.actions';

type Props = {
  history: History;
};

const LoginScreen = ({ history }: Props): JSX.Element => {
  const { user, setUser } = useContext(AppContext) as IAppContext;
  const btnWrapper = {
    width: '200px',
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = (e: AppClickEvent) => {
    const lastPath = localStorage.getItem('lastPath') || '/dc';
    setUser(
      logIn({
        name: 'Beto',
        email: 'beto@emial.com',
        id: '1',
        logged: user.logged,
      })
    );
    history.push(lastPath);
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
