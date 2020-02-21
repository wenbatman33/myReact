import React from 'react';
import { Provider } from 'react-redux'
import RD from 'component/RD'
import configureStore from 'store';

export default class ReduxPages extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>      
        <RD></RD>
      </Provider>
    );
  }
}
