import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

// import ToggleDisplay from './components/ToggleDisplay';
import PokeList from './components/PokeList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <PokeList />
      </div>
    </Provider>
  );
};

export default App;
