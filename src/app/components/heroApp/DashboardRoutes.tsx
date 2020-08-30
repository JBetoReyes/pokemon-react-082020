import React from 'react';
import NavBar from '@components/heroApp/components/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import MarvelScreen from './marvel/MarvelScreen';
import DCScreen from './dc/DCScreen';
import HeroScreen from './heroes/HeroScreen';
import SearchScreen from './Search/SearchScreen';

const DasboardRoutes = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <div>
        <Switch>
          <Route path="/marvel" component={MarvelScreen} />
          <Route path="/dc" component={DCScreen} />
          <Route path="/search" component={SearchScreen} />
          <Route path="/hero/:heroId" component={HeroScreen} />
          <Redirect from="/" to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

export default DasboardRoutes;
