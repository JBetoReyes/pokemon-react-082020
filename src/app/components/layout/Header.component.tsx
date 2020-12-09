import React from 'react';
import logo from '@assets/pokemon-logo.png';
import profile from '@assets/profile.png';

const Header = (): JSX.Element => (
  <header className="header">
    <img src={logo} alt="logo" className="header__img" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={profile} alt="profile" />
        <p>Profile</p>
      </div>
      <ul>
        <li>
          <a href="/">Account</a>
        </li>
        <li>
          <a href="/">Logout</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
