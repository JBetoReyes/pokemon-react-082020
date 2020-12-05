import { fetchPokemons, fetchAllPokemons } from '@services/pokemonService';
import { ThunkAction } from 'redux-thunk';
import { IPokemon } from '../../models/pokemonModel';
import { IStoreState } from '../../models/storeModel';

export const SET_POKEMONS = '[Carousel] Set pokemons';
export const SET_CAROUSEL_LOADING_STATE =
  '[Carousel] Set carousel loadingState';
export const ADD_POKEMON_MY_LIST = '[Carousel] Add pokemon my list';
export const DELETE_POKEMON_MY_LIST = '[Carousel] Delete pokemon my list';
export const SET_SEARCH_RESULTS = '[Carousel] Set search results';

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

interface IDeletePokemonMyList {
  type: typeof DELETE_POKEMON_MY_LIST;
  payload: string;
}

interface ISetSearchResults {
  type: typeof SET_SEARCH_RESULTS;
  payload: IPokemon[];
}

export type CarouselActionsType =
  | ISetMainCarousel
  | ISetMainLoadingState
  | IAddPokemonMyList
  | IDeletePokemonMyList
  | ISetSearchResults;

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

export const deletePokemonMyList = (
  pokemonNumber: string
): CarouselActionsType => {
  return {
    type: DELETE_POKEMON_MY_LIST,
    payload: pokemonNumber,
  };
};

export const setSearchResults = (pokemons: IPokemon[]): CarouselActionsType => {
  return {
    type: SET_SEARCH_RESULTS,
    payload: pokemons,
  };
};

export const searchPokemons = (
  query: string
): ThunkAction<void, IStoreState, void, CarouselActionsType> => {
  return (dispatch) => {
    if (query === '') {
      dispatch(setSearchResults([]));
      return;
    }
    const mockResponse = fetchAllPokemons();
    const results = mockResponse.filter((pokemon) => {
      return pokemon.name.includes(query) || pokemon.number.includes(query);
    });
    dispatch(setSearchResults(results));
  };
};
