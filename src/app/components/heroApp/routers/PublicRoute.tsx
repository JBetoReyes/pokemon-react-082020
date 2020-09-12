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

const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}: Props): JSX.Element => {
  const componentSwitch = (props: RouteComponentProps) => {
    return !isAuthenticated ? <Component {...props} /> : <Redirect to="/" />;
  };
  return <Route {...rest} component={componentSwitch} />;
};

export default PublicRoute;
