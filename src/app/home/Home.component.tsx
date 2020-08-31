// import React, { useState } from 'react';
import React, { useReducer } from 'react';
import AppRouter from '@components/heroApp/AppRouter';
import AppContext from '@components/heroApp/app.context';
import authReducer from '@components/heroApp/auth/auth.reducer';
import { IAppUser } from '@components/heroApp/auth/auth.model';
// import TodoApp from '@components/hooks/Todo2/TodoApp.component';
// import SearchBar from '@components/common/SearchBar.component';
// import Carousel from '@components/common/Carousel.component';
// import TodoComponent from '@components/hooks/TODO/TodoList.component';
// import Card from '@components/common/Card.component';
// import CounterButtons from '@components/hooks/counterHook.component';
// import Form from '@components/hooks/ExampleForm.component';
// import FormWithCustomHook from '@components/hooks/FormWithCutomHook.component';
// import BreakingBadQuotes from '@components/hooks/FetchExample.component';
// import MemoComponent from '@components/hooks/Memo.component';
// import { AppClickEvent } from '@typings/htmlEvents';
// import MainApp from '@components/hooks/useContext/MainApp.component';
// import useFetchPokemons from './Home.hooks';

export interface IPokemonAPI {
  results: IPokemonAM[];
}

export interface IPokemonAM {
  name: string;
  url: string;
}

export interface IPokemon extends IPokemonAM {
  number: number;
}
const initializer = (): IAppUser => {
  return {
    logged: false,
  };
};

export default (): JSX.Element => {
  // const pokemonImagesUrl = process.env.POKEMON_IMAGES_URL;
  // const { state, data: pokemons } = useFetchPokemons();
  // const [shouldShowHide, setShouldHide] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const handleShouldHide = (e: AppClickEvent) => {
  //   setShouldHide(!shouldShowHide);
  // };
  // const carousel = (
  //   <Carousel>
  //     {pokemons.map(({ name, number }) => (
  //       <Card
  //         key={`${number}-${name}`}
  //         detail={name}
  //         detailLabel="Name"
  //         subDetail={`${number}`}
  //         subDetailLabel="Pokemon Number"
  //         url={`${pokemonImagesUrl}/${number}.png`}
  //       />
  //     ))}
  //   </Carousel>
  // );
  const [user, setUser] = useReducer<typeof authReducer, IAppUser>(
    authReducer,
    { logged: false },
    initializer
  );
  return (
    <section>
      {/* <SearchBar title="Which is your favorite pokemon?" />
      {state === 'loading' ? 'loading' : carousel}
      <CounterButtons />
      <hr />
      <Form />
      <hr />
      <p>Form With Custom hook</p>
      <FormWithCustomHook />
      {!shouldShowHide ? <BreakingBadQuotes /> : 'hiding things'}
      <button type="button" onClick={handleShouldHide}>
        Hide/Show
      </button>
      <hr />
      <MemoComponent />
      <TodoComponent /> */}
      {/* <MainApp /> */}
      {/* <TodoApp /> */}
      <AppContext.Provider value={{ user, setUser }}>
        <AppRouter />
      </AppContext.Provider>
    </section>
  );
};
