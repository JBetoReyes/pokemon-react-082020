import React, { ReactNode } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { IStoreState } from '../../models/storeModel';
import LoadingDots from './LoadingDots';

const mapState = (state: IStoreState) => {
  return {
    exploreCarousel: state.exploreCarousel,
  };
};

const connector = connect(mapState);
type CarouselType = 'exploreCarousel';
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  title: string;
  carouselName?: CarouselType;
  children: ReactNode;
};

const Carousel = (props: Props): JSX.Element => {
  const { children, carouselName, title } = props;
  let isLoading = false;
  // eslint-disable-next-line react/destructuring-assignment
  if (carouselName && props[carouselName]) {
    isLoading = !!props[carouselName].isloading;
  }
  return (
    <div className={`carousel ${isLoading ? 'loading' : ''}`}>
      <h2 className="carousel--title">{title}</h2>
      {/* {isLoading ? <div className="skeleton"></div> : <div className="carousel__container">{children}</div>} */}
      {/* <div className="carousel__container">
        <div className="skeleton"></div>
        <div className="skeleton"></div>
        <div className="skeleton"></div>
        <div className="skeleton"></div>
        <div className="skeleton"></div>
        <div className="skeleton"></div>
        <div className="skeleton"></div>
        <div className="skeleton"></div>
      </div> */}
      {/* <div className="carousel__container">{children}</div> */}
      <div className="carousel__container">{children}</div>
      {isLoading ? <LoadingDots /> : null}
    </div>
  );
};

export default connector(Carousel);
