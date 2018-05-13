import { SET_SEARCH_TERM } from '../actionTypes';

export const setSearchTermAction = (searchTerm) => (
  {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  }
);
