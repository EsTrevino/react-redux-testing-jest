import { EXAMPLE_ACTION, API_EXAMPLE } from '../actionTypes';

export const initialState = {
  welcome: 'hello world',
  testData: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return { welcome: action.payload };
    case API_EXAMPLE:
      return { ...state, testData: action.payload };
    default:
      return state;
  }
}
