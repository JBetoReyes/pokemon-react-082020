/* eslint-disable no-case-declarations */
import { ICarousel } from '../../models/uiModel';
import {
  ADD_POKEMON_MY_LIST,
  CarouselActionsType,
} from '../actions/carouselActions';

const initialState: ICarousel = {
  pokemons: [],
};

const myListReducer = (
  state: ICarousel = initialState,
  action: CarouselActionsType
): ICarousel => {
  switch (action.type) {
    case ADD_POKEMON_MY_LIST:
      const repeatedIndex = state.pokemons.findIndex(
        (p) => p.number === action.payload.number
      );
      const newPokemons = state.pokemons;
      if (repeatedIndex === -1) {
        newPokemons.push(action.payload);
      }
      return {
        ...state,
        pokemons: newPokemons,
      };
    default:
      return state;
  }
};

export default myListReducer;
