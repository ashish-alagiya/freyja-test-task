import {STORE_DATA} from '../actions';

const initialState = {
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_DATA:
      return {...state, products: action.payload};
    default:
      return state;
  }
};

export default productsReducer;
