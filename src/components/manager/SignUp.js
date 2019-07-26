import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import propTypes from 'prop-types';

import { withFirebase } from '../Firebase';
import * as CONSTANTS from '../Constants';

import Button from 'react-bootstrap/Button';

const SignUpPage = () => {
  return (
    <div id="form" className="container">
      <h1>Register a new site manager</h1>
      <div className="container col-md-6">
        <SignUpForm />
      </div>
    </div>
  );
};

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class SignUpFormBase extends Component {
  state = INITIAL_STATE;

  onSubmit = e => {
    const { username, email, passwordOne } = this.state;

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        return this.props.firebase.user(authUser.user.uid).set({
          username,
          email
        });
      })
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(CONSTANTS.ROUTE_ADMIN);
      })
      .catch(error => {
        this.setState({ error });
      });

    e.preventDefault();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const isFormValid =
      this.state.passwordOne === this.state.passwordTwo &&
      this.state.passwordOne !== '' &&
      this.state.email !== '' &&
      this.state.username !== '';

    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            className="form-control"
            type="text"
            placeholder="User Name"
          />
        </div>
        <div className="form-group">
          <input
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            className="form-control"
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group">
          <input
            name="passwordOne"
            value={this.state.passwordOne}
            onChange={this.onChange}
            className="form-control"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <input
            name="passwordTwo"
            value={this.state.passwordTwo}
            onChange={this.onChange}
            className="form-control"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="form-group">
          <Button
            variant="cta"
            type="submit"
            disabled={!isFormValid}
            className="btn-lg btn-block"
          >
            Register!
          </Button>
        </div>

        {this.state.error && <p>{this.state.error.message}</p>}
      </form>
    );
  }
}

const SignUpLink = props => {
  return (
    <Button
      variant="secondary"
      href={CONSTANTS.ROUTE_SIGN_UP}
      className="btn-block"
    >
      {props.text}
    </Button>
  );
};

SignUpLink.propTypes = {
  text: propTypes.string
};

SignUpLink.defaultProps = {
  text: 'Sign Up!'
};

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

export default SignUpPage;

export { SignUpForm, SignUpLink };
