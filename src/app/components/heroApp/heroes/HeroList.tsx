import React from 'react';
import { IHero } from '../data/heroes';
import HeroCard from './HeroCard';

export type OwnProps = {
  heroes: IHero[];
};

const HeroList = ({ heroes }: OwnProps): JSX.Element => {
  return (
    <div className="card-columns m-5">
      {heroes.map((hero) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

export default HeroList;
