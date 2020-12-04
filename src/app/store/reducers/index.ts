import { combineReducers } from 'redux';
import { IStoreState } from 'src/app/models/storeModel';
import { AppActionsType } from '../actions';
import carouselReducer from './carouselReducer';
import myListReducer from './myListReducer';

export default combineReducers<IStoreState, AppActionsType>({
  exploreCarousel: carouselReducer,
  myListCarousel: myListReducer,
});
