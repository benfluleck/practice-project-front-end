import { ADD_API_DATA } from '../actionTypes';

import initialState from './initialState';

const INITIAL_STATE = initialState;


const apiDataReducer = (state = INITIAL_STATE.apiData, action) =>
  (action.type === ADD_API_DATA ?
    { ...state, [action.payload.imdbID]: action.payload } : state);

// const apiDataReducer = (state = {}, action) => {
//   if (action.type === ADD_API_DATA) {
//     console.log('I am hererrrrrr');
//     return Object.assign({},
//       state,
//       { [action.payload.imdbID]: action.payload });
//   }
//   return state;
// };


export default apiDataReducer;
