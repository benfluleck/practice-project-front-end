import axios from 'axios';
import { SET_SEARCH_TERM, ADD_API_DATA } from '../actionTypes';

export const setSearchTermAction = (searchTerm) => (
  {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  }
);

export const addApiData = (apiData) => (
  {
    type: ADD_API_DATA,
    payload: apiData,
  }
);

export const getAPIDetails = (imdbID) => (
 (dispatch) => (
     axios.get(`http://localhost:3000/${imdbID}`)
     .then(response => {
       console.log('I am here', response);
       dispatch(addApiData(response.data));
     })
     .catch(error => {
       console.log(error);
     })
   )
);

