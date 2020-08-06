import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Carousel = ({ children }: Props): JSX.Element => {
  return <div className="carousel">{children}</div>;
};

export default Carousel;
