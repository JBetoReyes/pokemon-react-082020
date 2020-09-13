import React from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom';

export type OwnProps = {
  isAuthenticated: boolean;
  component: React.ComponentType<RouteComponentProps>;
};

export type Props = OwnProps & RouteProps;

export default ({
  isAuthenticated,
  component: Component,
  ...rest
}: Props): JSX.Element => {
  if (rest.location) {
    localStorage.setItem('lastPath', rest.location.pathname);
  }
  const componentSwitch = (props: RouteComponentProps) => {
    return isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    );
  };
  return <Route {...rest} component={componentSwitch} />;
};
