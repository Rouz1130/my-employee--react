import {combineReducers} from 'redux';
import employeeAppState from './employees';
import loaderState from './loaderState';

const rootReducer = combineReducers ({
  employeeAppState,
  loaderState
});

export default rootReducer;
