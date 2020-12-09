import React from 'react';
import { Provider } from 'react-redux';
import store from '../store'
import Header from '@components/layout/Header.component';
import AppRouter from './AppRouter';

const App = (): JSX.Element => {
  return (
    <Provider store={store} >
      <Header />
      <AppRouter />
    </Provider>
  );
};

export default App;
