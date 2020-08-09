import React, { ReactNode } from 'react';
import './_Carousel.component.scss';

type Props = {
  children: ReactNode;
};

const Carousel = ({ children }: Props): JSX.Element => {
  return (
    <div className="carousel">
      <div className="carousel__container">{children}</div>
    </div>
  );
};

export default Carousel;
