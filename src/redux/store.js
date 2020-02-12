import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const middleWare = [thunk];

export default createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleWare))
);

/**
 * in redux:
 * 1) your state is kept in a store
 * 2) in order to update that state, you have to pass an action (object) to the dispatch method
 * 3) actions are just objects that have a type property and some sort of payload property
 * 4) the actions are run through reducers, which determine how to update
 *    your application state based on the action type
 * 5) people use action creators which are functions that returns actions which are ultimately just objects
 * 6) thunks are functions that return functions
 */

//thunk is a function that returns a function
