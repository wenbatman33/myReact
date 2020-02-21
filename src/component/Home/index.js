import React from 'react';
import Header from 'component/Header';
import Products from 'component/Products';

import 'assets/scss/App.scss';

function Home() {

  return (
    <div className="App container-fluid p-0">
      <Header nickName='admin'/>
      <Products />
    </div>
  );
}

export default Home;
