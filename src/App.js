import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as CONSTANTS from './components/Constants';
import { withAuthentication } from './components/Session';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Cafe from './components/Cafe';
import Account from './components/Account';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PasswordForget from './components/PasswordForget';
import Admin from './components/Admin';
import NotFound404 from './components/NotFound404';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="flex-wrapper">
            <Navbar />
            <div className="main-content">
              <Switch>
                <Route
                  path={CONSTANTS.ROUTE_LANDING}
                  exact
                  render={props => <Landing {...props} />}
                />
                <Route
                  path={CONSTANTS.ROUTE_BROOKLINE}
                  render={props => (
                    <Cafe {...props} cafeLocation={CONSTANTS.BROOKLINE} />
                  )}
                />
                <Route
                  path={CONSTANTS.ROUTE_SOMERVILLE}
                  render={props => (
                    <Cafe {...props} cafeLocation={CONSTANTS.SOMERVILLE} />
                  )}
                />
                <Route path={CONSTANTS.ROUTE_ACCOUNT} component={Account} />
                <Route path={CONSTANTS.ROUTE_SIGN_UP} component={SignUp} />
                <Route path={CONSTANTS.ROUTE_LOG_IN} component={Login} />
                <Route
                  path={CONSTANTS.ROUTE_ADMIN}
                  render={props => <Admin {...props} />}
                />
                <Route
                  path={CONSTANTS.ROUTE_PASSWORD_FORGET}
                  component={PasswordForget}
                />
                <Route component={NotFound404} />
              </Switch>
            </div>

            <Footer />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default withAuthentication(App);
