import React, { ReactNode } from 'react';

export type OwnProps = {
  title: string;
  subTitle: string;
};

type Props = OwnProps & {
  children?: ReactNode;
};

const Card = ({ title, subTitle }: Props): JSX.Element => {
  return (
    <div className="card-item">
      <img src="" alt="pokemonimage" className="card-item__img" />
      <div className="card-item__details">
        <p className="card-item__details--title">{title}</p>
        <p className="card-item__details--sub-title">{subTitle}</p>
      </div>
    </div>
  );
};

export default Card;
