import React from 'react';
import ProductList from 'component/context/ProductList';
import MyProvider from 'component/context/MyProvider';

export default class Dashboard extends React.Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <ProductList />
        </div>
      </MyProvider>
    );
  }
}
