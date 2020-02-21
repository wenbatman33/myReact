import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Home from 'component/Home'
import Login from 'component/Login'
import Page404 from 'component/Page404'


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/login/:nickName' component={Login}/>
      <Route component={Page404}/>
    </Switch>
  </BrowserRouter>


)

export default Router;
