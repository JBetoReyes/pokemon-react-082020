/* eslint-disable @typescript-eslint/naming-convention */
import React, { useMemo } from 'react';
import { useParams, Redirect, RouteComponentProps } from 'react-router-dom';
import { AppClickEvent } from '@typings/htmlEvents';
import getHeroesById from '../services/getHeroesById';
import { IHero } from '../data/heroes';

type Props = Pick<RouteComponentProps, 'history'>;

const HeroScreen = ({ history }: Props): JSX.Element => {
  const { heroId } = useParams<{ heroId: string }>();
  const hero = useMemo<IHero | undefined>(() => getHeroesById(heroId), [
    heroId,
  ]);
  if (!hero) {
    return <Redirect to="/" />;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = (e: AppClickEvent) => {
    if (history.length <= 2) {
      history.push('/');
    }
    history.goBack();
  };
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero as IHero;
  return (
    <div className="row m-5">
      <div className="col-3">
        <img
          src={`../heroes/${heroId}.jpg`}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {' '}
            <b> Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            {' '}
            <b> Publisher: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            {' '}
            <b> First appearance: </b>
            {first_appearance}
          </li>
        </ul>

        <h5> Characters </h5>
        <p>{characters}</p>

        <button
          type="button"
          className="btn btn-outline-info"
          onClick={handleClick}
        >
          Return
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
