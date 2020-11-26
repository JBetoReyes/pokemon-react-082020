import React from 'react';
import { Provider } from 'react-redux';
import store from '../store'
import Header from '@components/layout/Header.component';
import Home from '../pages/home/Home.component';

const App = (): JSX.Element => {
  return (
    <Provider store={store} >
      <Header />
      <Home />
    </Provider>
  );
};

export default App;
