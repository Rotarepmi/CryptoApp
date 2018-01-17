import { combineReducers } from 'redux';
import appReducer from './appReducer';

const rootReducer = combineReducers({
  crypto: appReducer
});

export default rootReducer;
