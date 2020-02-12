import { EXAMPLE_ACTION, API_EXAMPLE } from './actionTypes';
import axios from 'axios';

//actions need to return plain objects
export const testAction = updatedMessage => ({
  type: EXAMPLE_ACTION,
  payload: updatedMessage
});

export const testThunkAction = () => async dispatch => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/berry');

  return dispatch({
    type: API_EXAMPLE,
    payload: data.results
  });
};
