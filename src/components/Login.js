import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { withFirebase } from './Firebase';
import Button from 'react-bootstrap/Button';
import * as ROUTES from '../constants/routes';

const LoginPage = () => {
  return (
    <div className="container col-md-6">
      <h1>Sign In</h1>
      <LoginForm />
      <SignUpLink text="No account? Sign Up here!" />
      <PasswordForgetLink text="Forgot Password?" />
    </div>
  );
};

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class LoginFormBase extends Component {
  state = INITIAL_STATE;

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const isFormValid = this.state.password !== '' && this.state.email !== '';

    return (
      <form onSubmit={this.onSubmit}>
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
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            className="form-control"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <Button
            variant="cta"
            disabled={!isFormValid}
            className="btn-lg btn-block"
          >
            Sign In!
          </Button>
        </div>

        {this.state.error && <p>{this.state.error.message}</p>}
      </form>
    );
  }
}

const LoginForm = withRouter(withFirebase(LoginFormBase));

export default LoginPage;

export { LoginForm };
