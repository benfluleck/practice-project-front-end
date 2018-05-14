import { combineReducers } from 'redux';

import searchTermReducer from './searchTermReducer';
import apiDataReducer from './apiDataReducer';

const rootReducer = combineReducers({
  searchTerm: searchTermReducer,
  apiData: apiDataReducer,
});

export default rootReducer;
