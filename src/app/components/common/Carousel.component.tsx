import React, { LegacyRef, ReactNode, useEffect, useRef } from 'react';
import './_Carousel.component.scss';

type Props = {
  children: ReactNode;
};

const Carousel = ({ children }: Props): JSX.Element => {
  // const carouselRef = useRef<HTMLDivElement | null>(null);
  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: .5
  //   };
  //   const observer = new IntersectionObserver((entities) => {
  //     console.log('entities', entities);
  //   }, options);
  //   observer.observe(carouselRef.current as any)
  //   return () => observer.unobserve(carouselRef.current as any);
  // }, [carouselRef.current])
  return (
    <div className="carousel">
      <div className="carousel__container">{children}</div>
    </div>
  );
};

export default Carousel;
