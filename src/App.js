import React from 'react';
import routes from './router/routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './assets/scss/App.scss';

function App() {
  return (
    <div className="App container-fluid px-3">
      <Router>
        <div>
          <div className='row my-3'>
            {
              routes.map((item, index) => {
                return <div className='col' key={index}> <Link to={item.path}>{item.meta.title}</Link></div>
              })
            }
          </div>
          <hr />
          <Switch>
            {
              routes.map((item, index) => {
                return <Route key={index} exact path={item.path}> <item.component /> </Route>
              })
            }
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
