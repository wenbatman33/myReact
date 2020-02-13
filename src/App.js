import React from 'react';
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
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contextPage">ContextPage</Link></li>
          <li><Link to="/reduxpages">ReduxPages</Link></li>
        </ul>
        <hr />
      </div>
      {/* <span>
      {
        routes.map((route, index)=>{
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(props)=>{
              if(route.children) {
              } else {
                document.title = route.meta.title;
                return (<route.component props={props}></route.component>)
              }
            }}
            >
          </Route>
        })
      }
      </span> */}
      <Router>
        <Switch>
          {
            routes.map((route, index)=>{
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props)=>{
                  if(route.children) {
                  } else {
                    document.title = route.meta.title;
                    return (<route.component props={props}></route.component>)
                  }
                }}
                >
              </Route>
            })
          }
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
