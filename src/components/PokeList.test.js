//we need to import all the necessary libraries
import React from 'react';
import { cleanup, render, waitForElement } from '@testing-library/react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers/index';
import axios from 'axios';
import PokeList from './PokeList';

//mock axios
jest.mock('axios');
const mockedApiResponse = {
  data: {
    results: [
      { name: 'testName', url: 'jkldsfjkdlsjf' },
      { name: 'testName1', url: 'jkldsfjkdjksldlsjf' },
      { name: 'testName2', url: 'jkldsfjkjkdlsjfklddlsjf' }
    ]
  }
};
//set up redux
const middleWare = [thunk];
function renderWithRedux(
  component,
  {
    initialState,
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middleWare)
    )
  } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  };
}

//cleanup
afterEach(() => {
  cleanup();
});

test('<PokeList />', async () => {
  axios.get.mockImplementationOnce(() => Promise.resolve(mockedApiResponse));

  const {
    debug,
    getByTestId,
    queryByTestId,
    queryAllByTestId
  } = renderWithRedux(<PokeList />);
  expect(queryByTestId('api-list')).toBe(null);

  await waitForElement(() => {
    return getByTestId('api-list');
  });

  expect(queryByTestId('api-list')).not.toBe(null);
  expect(queryAllByTestId('api-item').length).toBe(3);
});
