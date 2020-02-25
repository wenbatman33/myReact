import React from 'react';
import Router from 'Router';
import { Provider } from 'react-redux';
import configureStore from 'store';
import 'assets/scss/App.scss';

function App() {
  return (
    <Provider store={configureStore()}>      
      <Router/>
    </Provider>
  );
}

export default App;
