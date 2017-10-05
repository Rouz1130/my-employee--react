import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),

    window._REDUX_DEVTOOLS_EXTENSIONS_&& window._REDUX_DEVTOOLS_EXTENSIONS_()
  );

  return store;
}
