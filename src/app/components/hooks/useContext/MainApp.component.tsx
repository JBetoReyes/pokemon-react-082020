import React, { useState } from 'react';
import AppRouter from './AppRouter';
import UserContext from './UserContext.component';
import { IAppUser, IAppUserContext } from './userContext.model';

const MainApp = (): JSX.Element => {
  const [user, setUser] = useState<IAppUser>({
    name: '',
    email: '',
  });
  const defaultContext: Partial<IAppUserContext> = {
    user,
    setUser,
  };
  return (
    <UserContext.Provider value={defaultContext}>
      <AppRouter />
    </UserContext.Provider>
  );
};

export default MainApp;
