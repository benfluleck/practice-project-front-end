import { SET_SEARCH_TERM } from '../actionTypes';
import initialState from './initialState';

const INITIAL_STATE = initialState;

const setSearchTermReducer = (state, action) =>
({ ...state,
  searchTerm: action.payload,
});


const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM: {
      return setSearchTermReducer(state, action);
    }
    default:
      return state;
  }
};

export default rootReducer;
