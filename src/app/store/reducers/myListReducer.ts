/* eslint-disable no-case-declarations */
import { ICarousel } from '../../models/uiModel';
import {
  ADD_POKEMON_MY_LIST,
  CarouselActionsType,
  DELETE_POKEMON_MY_LIST,
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
    case DELETE_POKEMON_MY_LIST:
      return {
        ...state,
        pokemons: state.pokemons.filter(
          (pokemon) => pokemon.number !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default myListReducer;
