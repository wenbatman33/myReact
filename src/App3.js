import React from 'react';
import Home from '@/views/Home';
import About from '@/views/About';
import ReduxPages from '@/views/ReduxPages';
import ContextPage from '@/views/ContextPage';
import routes from './router/routes'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './assets/scss/App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contextPage">ContextPage</Link>
            </li>
            <li>
              <Link to="/reduxpages">ReduxPages</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contextPage">
              <ContextPage />
            </Route>
            <Route path="/reduxpages">
              <ReduxPages />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
