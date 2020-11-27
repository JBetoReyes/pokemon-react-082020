import { fetchPokemons } from '@services/pokemonService';
import { ThunkAction } from 'redux-thunk';
import { IPokemon } from '../../models/pokemonModel';
import { IStoreState } from '../../models/storeModel';

export const SET_POKEMONS = '[Carousel] Set pokemons';

interface ISetMainCarousel {
  type: typeof SET_POKEMONS;
  payload: IPokemon[];
}

export type CarouselActionsType = ISetMainCarousel;

const setMainCarousel = (pokemons: IPokemon[]): CarouselActionsType => ({
  type: '[Carousel] Set pokemons',
  payload: pokemons,
});

export const loadMainCarousel = (
  page: number
): ThunkAction<void, IStoreState, void, CarouselActionsType> => {
  return async (dispatch) => {
    try {
      const pokemons = await fetchPokemons(page);
      if (pokemons) {
        dispatch(setMainCarousel(pokemons));
      }
    } catch (err) {
      console.log(err);
    }
  };
};
