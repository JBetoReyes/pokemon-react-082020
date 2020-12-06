import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { IPokemon } from '../models/pokemonModel';

import rootReducer from './reducers';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const pokemons: IPokemon[] = localStorage.getItem('pokemons')
  ? JSON.parse(localStorage.getItem('pokemons') as string)
  : [];
const myList: IPokemon[] = localStorage.getItem('myList')
  ? JSON.parse(localStorage.getItem('myList') as string)
  : [];
const store = createStore(
  rootReducer,
  {
    exploreCarousel: {
      isloading: true,
      pokemons,
    },
    myListCarousel: {
      isloading: false,
      pokemons: myList,
    },
  },
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  const myList = store.getState().myListCarousel;
  localStorage.setItem('myList', JSON.stringify(myList.pokemons));
});

export default store;
