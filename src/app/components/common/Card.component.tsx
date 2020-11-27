import React, { MutableRefObject, ReactNode, RefObject } from 'react';
import './Card.component.scss';
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

const Card = React.forwardRef(({
  detail,
  subDetail,
  url,
  detailLabel,
  subDetailLabel,
}: Props,
ref): JSX.Element => {
  return (
    <div className="card-item" ref={ref as React.RefObject<HTMLDivElement>} >
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
});

export default Card;
