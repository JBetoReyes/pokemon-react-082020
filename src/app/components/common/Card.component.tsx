import React, { ReactNode } from 'react';
import './_Card.component.scss';
import { upperFirst } from 'lodash';

export type OwnProps = {
  detail: string;
  subDetail: string;
  detailLabel: string;
  subDetailLabel: string;
  url: string;
};

type Props = OwnProps & {
  children?: ReactNode;
};

const Card = ({
  detail,
  subDetail,
  url,
  detailLabel,
  subDetailLabel,
}: Props): JSX.Element => {
  return (
    <div className="card-item">
      <img src={`${url}`} alt="pokemonimage" className="card-item__img" />
      <div className="card-item__details">
        <p className="card-item__details--title">
          {`${upperFirst(detailLabel)}: ${upperFirst(detail)}`}
        </p>
        <p className="card-item__details--sub-title">
          {`${upperFirst(subDetailLabel)}: ${upperFirst(subDetail)}`}
        </p>
      </div>
    </div>
  );
};

export default Card;
