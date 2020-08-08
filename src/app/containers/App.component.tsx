import React from 'react';
import Header from '@components/layout/Header.component';
import Card from '@components/common/Card.component';
import SearchBar from '@components/common/SearchBar.component';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <section>
        <SearchBar title="Which is your favorite pokemon?" />
      </section>
      <Card title="title" subTitle="subTitle" />
    </>
  );
};

export default App;
