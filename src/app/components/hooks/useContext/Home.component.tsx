import React, { useContext } from 'react';
import UserContext from './UserContext.component';
import { IAppUserContext } from './userContext.model';

const Home = (): JSX.Element => {
  const userContext = useContext(UserContext) as IAppUserContext;
  const { user } = userContext;
  return (
    <>
      <h1>Home component</h1>
      <hr />
      {JSON.stringify(user, undefined, 4)}
    </>
  );
};

export default Home;
