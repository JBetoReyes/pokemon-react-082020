import React from 'react';
import getHeroesByPubliser from '../services/getHeroesByPublisher';
import HeroList from '../heroes/HeroList';

const MarvelScreen = (): JSX.Element => {
  const heroes = getHeroesByPubliser('Marvel Comics');
  return (
    <>
      <h1>Marvel Screen</h1>
      <hr />
      <HeroList heroes={heroes} />
    </>
  );
};

export default MarvelScreen;
