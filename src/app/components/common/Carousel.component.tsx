import React, { LegacyRef, ReactNode, useEffect, useRef } from 'react';
import LoadingDots from './LoadingDots';
import './Carousel.component.scss';
import { IStoreState } from 'src/app/models/storeModel';
import { connect, ConnectedProps } from 'react-redux';

const mapState = (state: IStoreState) => {
  return {
    mainCarousel: state.mainCarousel,
  };
};

const connector = connect(mapState);
type CarouselType = 'mainCarousel';
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  title: string;
  carouselName?: CarouselType;
  children: ReactNode;
};

const Carousel = (props: Props): JSX.Element => {
  const { children, carouselName, title } = props;
  let isLoading = false;
  if (carouselName && props[carouselName]) {
    isLoading = props[carouselName].isloading;
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
