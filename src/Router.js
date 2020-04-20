import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Home from 'component/Home'
import Login from 'component/Login'
import Page404 from 'component/Page404'
import Page_1 from 'views/Page_1'
import Page_2 from 'views/Page_2'
import Page_3 from 'views/Page_3'
import Page_4 from 'views/Page_4'
import rp from 'views/ReduxPages'
import Header from 'component/Header';

const Router = () => (
  <BrowserRouter>
    <Header nickName='admin'/>
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/page_1' exact component={Page_1}/>
        <Route path='/page_2' exact component={Page_2}/>
        <Route path='/page_3' exact component={Page_3}/>
        <Route path='/page_4' exact component={Page_4}/>
        <Route path='/rp' exact component={rp}/>
        <Route path='/login/:nickName' component={Login}/>
        <Route component={Page404}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default Router;
