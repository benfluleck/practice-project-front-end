import { SET_SEARCH_TERM } from '../actionTypes';

import initialState from './initialState';

const INITIAL_STATE = initialState;

const searchTermReducer = (state = INITIAL_STATE.searchTerm, action) =>
  (action.type === SET_SEARCH_TERM ? action.payload : state);


export default searchTermReducer;
