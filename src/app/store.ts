// npm i redux @types/redux
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; //чтобы пользоваться devTools в хроме
import amountReducer from '../features/amount';
import goodsReducer from '../features/goods';
import positionReducer from '../features/position';

const reducer = combineReducers({
  amount: amountReducer,
  goods: goodsReducer,
  position: positionReducer,
});
const store = createStore(reducer, composeWithDevTools()); //composeWithDevTools() - чтобы пользоваться devTools в хроме

export type RootState = ReturnType<typeof store.getState>;

export default store;
