import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { withAuthentication } from './components/Session';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Brookline from './components/Brookline';
import Somerville from './components/Somerville';
import Account from './components/Account';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Login from './components/Login';
import PasswordForget from './components/PasswordForget';
import Admin from './components/Admin';
import NotFound404 from './components/NotFound404';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="flex-wrapper">
        <Navbar />
        <div className="main-content">
          <Switch>
            <Route path={ROUTES.LANDING} exact component={Landing} />
            <Route path={ROUTES.BROOKLINE} component={Brookline} />
            <Route path={ROUTES.SOMERVILLE} component={Somerville} />
            <Route path={ROUTES.ACCOUNT} component={Account} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.LOG_IN} component={Login} />
            <Route path={ROUTES.ADMIN} component={Admin} />
            <Route path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
            <Route component={NotFound404} />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default withAuthentication(App);
