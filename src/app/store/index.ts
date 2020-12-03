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
export default createStore(
  rootReducer,
  {
    exploreCarousel: {
      isloading: true,
      pokemons,
    },
  },
  composeEnhancers(applyMiddleware(thunk))
);
