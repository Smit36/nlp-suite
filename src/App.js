import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Switch>
            <Route
              path='/'
              render={() => (
                <Fragment>
                  <Home />
                  <Footer />
                </Fragment>
              )}
              exact={true}
            />
            <Route
              path='/user/signup'
              render={() => (
                <Fragment>
                  <SignUp />
                </Fragment>
              )}
              exact={true}
            />
            <Route
              path='/user/signin'
              render={() => (
                <Fragment>
                  <Login />
                </Fragment>
              )}
              exact={true}
            />
            <Route
              path='/dashboard'
              render={() => (
                <Fragment>
                  <Dashboard />
                </Fragment>
              )}
              exact={true}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
