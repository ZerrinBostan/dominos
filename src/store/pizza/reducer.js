import { SET_LOADING, SET_BASKET, SET_PIZZAS } from './types';

const initialState = {
  loading: false,
  basket: [],
  pizzaList: [],
};

const pizzaReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_PIZZAS:
      return {
        ...state,
        pizzaList: action?.payload,
      };
    case SET_BASKET:
      return {
        ...state,
        basket: action.payload,
      };
    default:
      return state;
  }
};

export default pizzaReducer;
