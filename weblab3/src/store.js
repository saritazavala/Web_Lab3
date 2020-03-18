import { createStore } from 'redux';
import reducer from './reducers';

export const configureStore = () => {
  return createStore(reducer, window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_());
}