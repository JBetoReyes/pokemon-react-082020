import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginScreen from '@components/heroApp/login/LoginScreen';
import DasboardRoutes from './DashboardRoutes';

const AppRouter = (): JSX.Element => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <Route path="/" component={DasboardRoutes} />
        </Switch>
      </Router>
    </>
  );
};

export default AppRouter;
