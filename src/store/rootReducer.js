import { combineReducers } from 'redux';
import pizzaReducer from './pizza/reducer';

export const rootReducer = combineReducers({
  pizzaReducer,
});

export default rootReducer;
