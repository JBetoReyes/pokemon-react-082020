/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from 'react';
import {
  Link,
  NavLink,
  RouteComponentProps,
  useHistory,
} from 'react-router-dom';
import { AppClickEvent } from '@typings/htmlEvents';
import AppContext, { IAppContext } from '../app.context';
import { logOut } from '../auth/auth.actions';

type Props = Pick<RouteComponentProps, 'history'>;

export default (): JSX.Element => {
  const { user, setUser } = useContext(AppContext) as IAppContext;
  const history = useHistory();
  const { name } = user;
  const handleLogout = (e: AppClickEvent) => {
    setUser(logOut());
    history.replace('/login');
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">{name}</span>
          <button
            type="button"
            className="nav-item nav-link btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
