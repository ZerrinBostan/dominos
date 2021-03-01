import { all, put, call, takeEvery } from 'redux-saga/effects';
import FetchPizzas from '../../client';

import { setLoading, setPizzaList } from './actions';
import { GET_PIZZAS } from './types';

function* getPizzas() {
  yield put(setLoading(true));
  const response = yield call(FetchPizzas);
  const pizzas = response.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    price: item.price,
  }));

  yield put(setPizzaList(pizzas));
  yield put(setLoading(false));
}

function* watchGetPizzas() {
  yield takeEvery(GET_PIZZAS, getPizzas);
}

export default function* rootSaga() {
  yield all([watchGetPizzas()]);
}
