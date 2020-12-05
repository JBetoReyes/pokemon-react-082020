import { ICarousel } from 'src/app/models/uiModel';
import {
  CarouselActionsType,
  SET_SEARCH_RESULTS,
} from '../actions/carouselActions';

const initialValue: ICarousel = {
  isloading: false,
  pokemons: [],
};

const searchResultsReducer = (
  state: ICarousel = initialValue,
  action: CarouselActionsType
): ICarousel => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
};

export default searchResultsReducer;
