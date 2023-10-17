import {combineReducers} from 'redux';
import productsReducer from './productsReducer';
import favoriteReducer from './favoriteReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  favorites: favoriteReducer,
});

export default rootReducer;
