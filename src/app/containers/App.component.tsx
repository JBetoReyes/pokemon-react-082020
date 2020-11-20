import React from 'react';
import Header from '@components/layout/Header.component';
import Home from '../pages/home/Home.component';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export default App;
