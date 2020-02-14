import React from 'react';
import { Provider } from 'react-redux';
import Store from '@/store';
import Cart from '@/component/cart'

const StoreInstance = Store();

export default class ReduxPages extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={StoreInstance}>
        <div>
          <Cart />
        </div>
      </Provider>
    );
  }
}
