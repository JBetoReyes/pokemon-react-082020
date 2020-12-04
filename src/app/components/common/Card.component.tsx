/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { ReactNode } from 'react';
import { upperFirst } from 'lodash';
import { connect, ConnectedProps } from 'react-redux';
import { addPokemonMyList } from '../../store/actions/carouselActions';
import './Card.component.scss';

const mapDispatch = {
  addPokemonMyList,
};

const connection = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connection>;
type ReactRef =
  | ((instance: unknown) => void)
  | React.MutableRefObject<unknown>
  | null;

export type OwnProps = {
  name: string;
  number: string;
  detail: string;
  subDetail: string;
  detailLabel: string;
  subDetailLabel: string;
  url: string;
  children?: ReactNode;
};

type ForwardedRefProp = {
  myForwardedRef: ReactRef;
};

type Props = OwnProps & PropsFromRedux & ForwardedRefProp;

const Card = (props: Props): JSX.Element => {
  const {
    detail,
    subDetail,
    url,
    detailLabel,
    subDetailLabel,
    myForwardedRef,
  } = props;
  const handleAddPokemon = () => {
    props.addPokemonMyList({
      name: props.name,
      number: props.number,
      url: props.url,
    });
  };
  return (
    <div
      className="card-item"
      ref={myForwardedRef as React.RefObject<HTMLDivElement>}
    >
      <img src={`${url}`} alt="pokemonimage" className="card-item__img" />
      <div className="card-item__details">
        <div className="card-item__detail--icons">
          <img
            className="card-item__details--plus-icon"
            src="./assets/plus.svg"
            alt="plus-icon"
            onClick={handleAddPokemon}
          />
          <div className="card-item__details--more-icon" />
        </div>
        <p className="card-item__details--title">
          {`${upperFirst(detailLabel)}: ${detail}`}
        </p>
        <p className="card-item__details--sub-title">
          {`${upperFirst(subDetailLabel)}: ${upperFirst(subDetail)}`}
        </p>
      </div>
    </div>
  );
};

const ConnectedComponent = connection(Card);

export default React.forwardRef((props: OwnProps, ref) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ConnectedComponent {...props} myForwardedRef={ref} />;
});
