
import {pcReducer} from './pcReducer';
import {combineReducers} from 'redux';

export default combineReducers({
  pcs: pcReducer,
});