import { fetchPokemons } from '@services/pokemonService';
import { ThunkAction } from 'redux-thunk';
import { IPokemon } from '../../models/pokemonModel';
import { IStoreState } from '../../models/storeModel';

export const SET_POKEMONS = '[Carousel] Set pokemons';
export const SET_CAROUSEL_LOADING_STATE =
  '[Carousel] Set carousel loadingState';

interface ISetMainCarousel {
  type: typeof SET_POKEMONS;
  payload: IPokemon[];
}

interface ISetMainLoadingState {
  type: typeof SET_CAROUSEL_LOADING_STATE;
  payload: boolean;
}

export type CarouselActionsType = ISetMainCarousel | ISetMainLoadingState;

const setMainCarousel = (pokemons: IPokemon[]): CarouselActionsType => ({
  type: '[Carousel] Set pokemons',
  payload: pokemons,
});

const setMainCarouseLoadingState = (loading: boolean): CarouselActionsType => {
  return {
    type: SET_CAROUSEL_LOADING_STATE,
    payload: loading,
  };
};

export const loadMainCarousel = (
  page: number
): ThunkAction<void, IStoreState, void, CarouselActionsType> => {
  return async (dispatch) => {
    dispatch(setMainCarouseLoadingState(true));
    try {
      const pokemons = await fetchPokemons(page);
      dispatch(setMainCarouseLoadingState(false));
      if (pokemons) {
        dispatch(setMainCarousel(pokemons));
      }
    } catch (err) {
      dispatch(setMainCarouseLoadingState(false));
      console.log(err);
    }
  };
};
