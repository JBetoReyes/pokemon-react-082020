import React from 'react';
import getHeroesByPubliser from '../services/getHeroesByPublisher';
import HeroList from '../heroes/HeroList';

const DCScreen = (): JSX.Element => {
  const heroes = getHeroesByPubliser('DC Comics');
  return (
    <>
      <h1>DC Screen</h1>
      <hr />
      <HeroList heroes={heroes} />
    </>
  );
};

export default DCScreen;
