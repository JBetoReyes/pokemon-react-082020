/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { ReactNode } from 'react';
import { upperFirst } from 'lodash';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import {
  addPokemonMyList,
  deletePokemonMyList,
} from '../../store/actions/carouselActions';

const mapDispatch = {
  addPokemonMyList,
  deletePokemonMyList,
};

const connection = connect(null, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connection>;
type ReactRef =
  | ((instance: unknown) => void)
  | React.MutableRefObject<unknown>
  | null;

export type OwnProps<T extends Object> = {
  detail: string;
  subDetail: string;
  detailLabel: string;
  subDetailLabel: string;
  url: string;
  children?: ReactNode;
  data?: T;
  addActionHandler?: (data: T) => void;
  detailActionHandler?: (data: T, history: History) => void;
  deleteActionHandler?: (data: T) => void;
};

type ForwardedRefProp = {
  myForwardedRef: ReactRef;
};

type Props<T> = OwnProps<T> & PropsFromRedux & ForwardedRefProp;

const CardFactory = <T extends Object>() => (props: Props<T>): JSX.Element => {
  const {
    detail,
    subDetail,
    url,
    detailLabel,
    subDetailLabel,
    myForwardedRef,
    addActionHandler,
    deleteActionHandler,
    detailActionHandler,
  } = props;
  const history = useHistory();
  return (
    <div
      className="card-item"
      ref={myForwardedRef as React.RefObject<HTMLDivElement>}
    >
      <img src={`${url}`} alt="pokemonimage" className="card-item__img" />
      <div className="card-item__details">
        <div className="card-item__details--icons">
          {deleteActionHandler ? (
            <img
              className="card-item__details--icon"
              src="./assets/minus.png"
              alt="delete"
              onClick={() => deleteActionHandler(props.data as T)}
            />
          ) : null}
          {props.data && addActionHandler ? (
            <img
              className="card-item__details--icon"
              src="./assets/plus.svg"
              alt="add"
              onClick={() => addActionHandler(props.data as T)}
            />
          ) : null}
          {detailActionHandler && (
            <button
              type="button"
              className="card-item__details--more-icon"
              onClick={() => detailActionHandler(props.data as T, history)}
            />
          )}
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

const componentFactory = <T extends Object>() => connection(CardFactory<T>());

const cardFactory = <T extends Object>() => {
  const ConnectedComponent = componentFactory<T>();
  return React.forwardRef((props: OwnProps<T>, ref) => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <ConnectedComponent {...props} myForwardedRef={ref} />;
  });
};

export default cardFactory;
