import { combineReducers } from 'redux';
import { IStoreState } from 'src/app/models/storeModel';
import { AppActionsType } from '../actions';
import { carouselReducer } from './carouselReducer';

export default combineReducers<IStoreState, AppActionsType>({
  mainCarousel: carouselReducer,
});
