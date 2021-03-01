import { GET_PIZZAS, SET_PIZZAS, SET_LOADING, SET_BASKET } from './types';

const getPizzaList = () => ({
  type: GET_PIZZAS,
});

const setPizzaList = (payload) => ({
  type: SET_PIZZAS,
  payload,
});

const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

const setBasket = (payload) => ({
  type: SET_BASKET,
  payload,
});

export { getPizzaList, setPizzaList, setLoading, setBasket };
