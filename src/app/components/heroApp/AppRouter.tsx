import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import LoginScreen from '@components/heroApp/login/LoginScreen';
import DasboardRoutes from './DashboardRoutes';
import { PrivateRoute } from './routers/PrivateRoute';
import AppContext from './app.context';
import { IAppContext } from './app.model';
import PublicRoute from './routers/PublicRoute';

const AppRouter = (): JSX.Element => {
  const { user } = useContext(AppContext) as IAppContext;
  return (
    <>
      <Router>
        <Switch>
          <PublicRoute
            isAuthenticated={user.logged}
            exact
            path="/login"
            component={LoginScreen}
          />
          <PrivateRoute
            isAuthenticated={user.logged}
            path="/"
            component={DasboardRoutes}
          />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
