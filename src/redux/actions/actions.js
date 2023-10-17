import {ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE, STORE_DATA} from '.';

export const storeData = data => ({
  type: STORE_DATA,
  payload: data,
});

export const addToFavorite = data => ({
  type: ADD_TO_FAVORITE,
  payload: data,
});

export const removeFromFavorite = item => ({
  type: REMOVE_FROM_FAVORITE,
  payload: item,
});
