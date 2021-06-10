import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Validate from './components/Login/Validate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink activeClassName="active" to="/login">Login</NavLink>
            <NavLink activeClassName="active" to="/token">Autenticação</NavLink>
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
          </div>
          <div className="content">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/token" component={Validate} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
