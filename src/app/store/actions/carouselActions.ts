import { fetchPokemons } from '@services/pokemonService';
import { ThunkAction } from 'redux-thunk';
import { IPokemon } from '../../models/pokemonModel';
import { IStoreState } from '../../models/storeModel';

export const SET_POKEMONS = '[Carousel] Set pokemons';
export const SET_CAROUSEL_LOADING_STATE =
  '[Carousel] Set carousel loadingState';
export const ADD_POKEMON_MY_LIST = '[Carousel] Add pokemon my list';

interface ISetMainCarousel {
  type: typeof SET_POKEMONS;
  payload: IPokemon[];
}

interface ISetMainLoadingState {
  type: typeof SET_CAROUSEL_LOADING_STATE;
  payload: boolean;
}

interface IAddPokemonMyList {
  type: typeof ADD_POKEMON_MY_LIST;
  payload: IPokemon;
}

export type CarouselActionsType =
  | ISetMainCarousel
  | ISetMainLoadingState
  | IAddPokemonMyList;

const setMainCarousel = (pokemons: IPokemon[]): CarouselActionsType => ({
  type: '[Carousel] Set pokemons',
  payload: pokemons,
});

const setExploreCarouseLoadingState = (
  loading: boolean
): CarouselActionsType => {
  return {
    type: SET_CAROUSEL_LOADING_STATE,
    payload: loading,
  };
};

export const loadMainCarousel = (
  page: number
): ThunkAction<void, IStoreState, void, CarouselActionsType> => {
  return async (dispatch) => {
    dispatch(setExploreCarouseLoadingState(true));
    try {
      const pokemons = await fetchPokemons(page);
      dispatch(setExploreCarouseLoadingState(false));
      if (pokemons) {
        dispatch(setMainCarousel(pokemons));
      }
    } catch (err) {
      dispatch(setExploreCarouseLoadingState(false));
      console.log(err);
    }
  };
};

export const addPokemonMyList = (pokemon: IPokemon): CarouselActionsType => {
  return {
    type: ADD_POKEMON_MY_LIST,
    payload: pokemon,
  };
};
