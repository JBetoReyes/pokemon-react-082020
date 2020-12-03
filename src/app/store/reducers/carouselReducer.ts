import { ICarousel } from 'src/app/models/uiModel';
import {
  CarouselActionsType,
  SET_CAROUSEL_LOADING_STATE,
  SET_POKEMONS,
} from '../actions/carouselActions';

const initialState: ICarousel = {
  isloading: true,
  pokemons: [],
};

const carouselReducer = (
  state: ICarousel = initialState,
  action: CarouselActionsType
): ICarousel => {
  switch (action.type) {
    case SET_POKEMONS:
      return {
        isloading: false,
        pokemons: [...state.pokemons, ...action.payload],
      };
    case SET_CAROUSEL_LOADING_STATE:
      return {
        ...state,
        isloading: action.payload,
      };
    default:
      return state;
  }
};

export default carouselReducer;
