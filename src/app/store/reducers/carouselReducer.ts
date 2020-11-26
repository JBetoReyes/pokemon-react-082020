import { ICarousel } from 'src/app/models/uiModel';
import { CarouselActionsType } from '../actions/carouselActions';
import { SET_POKEMONS } from '../actions/carouselActions';

const initialState: ICarousel = {
  isloading: true,
  pokemons: [],
};

export const carouselReducer = (
  state: ICarousel = initialState,
  action: CarouselActionsType
): ICarousel => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        isloading: false,
        pokemons: [...state.pokemons, ...action.payload],
      };
    default:
      return state;
  }
};
