import {combineReducers} from 'redux';
import employeeAppState from './employees';

const rootReducer = combineReducers ({
  employeeAppState
});

export default rootReducer;
