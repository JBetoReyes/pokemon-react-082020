import React, { ReactNode } from 'react';
import './_Card.component.scss';

export type OwnProps = {
  title: string;
  subTitle: string;
};

type Props = OwnProps & {
  children?: ReactNode;
};

const Card = ({ title, subTitle }: Props): JSX.Element => {
  const url = process.env.POKEMON_IMAGES_URL;
  return (
    <div className="card-item">
      <img
        src={`${url}/25.png`}
        alt="pokemonimage"
        className="card-item__img"
      />
      <div className="card-item__details">
        <p className="card-item__details--title">{title}</p>
        <p className="card-item__details--sub-title">{subTitle}</p>
      </div>
    </div>
  );
};

export default Card;
