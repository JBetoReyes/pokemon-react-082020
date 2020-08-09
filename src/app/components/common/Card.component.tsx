import React, { ReactNode } from 'react';
import './_Card.component.scss';

export type OwnProps = {
  title: string;
  subTitle: string;
  url: string;
};

type Props = OwnProps & {
  children?: ReactNode;
};

const Card = ({ title, subTitle, url }: Props): JSX.Element => {
  return (
    <div className="card-item">
      <img src={`${url}`} alt="pokemonimage" className="card-item__img" />
      <div className="card-item__details">
        <p className="card-item__details--title">{title}</p>
        <p className="card-item__details--sub-title">{subTitle}</p>
      </div>
    </div>
  );
};

export default Card;
