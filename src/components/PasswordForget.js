import React from "react";

import { withFirebase } from "./Firebase";
import * as ROUTES from "../constants/routes";
import SecondaryLinkButton from "./SecondaryLinkButton";
import CallToActActionButton from "./CallToActActionButton";
import FormInput from "./FormInput";

const PasswordForgetPage = () => {
  return (
    <div className="container col-md-6">
      <h1>Forgot Password</h1>
      <PasswordForgetForm />
    </div>
  );
};

const INITIAL_STATE = {
  email: "",
  error: null
};

class PasswordForgetFormBase extends React.Component {
  state = INITIAL_STATE;

  onSubmit = event => {
    this.props.firebase
      .doPasswordReset(this.state.email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const isInvalid = this.state.email === "";

    return (
      <form onSubmit={this.onSubmit}>
        <FormInput
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          className="form-control"
          type="text"
          placeholder="Email Address"
        />
        <div className="form-group">
          <CallToActActionButton
            className="btn-lg btn-block"
            type="submit"
            disabled={isInvalid}
          >
            Reset My Password!
          </CallToActActionButton>
        </div>

        {this.state.error && <p>{this.state.error.message}</p>}
      </form>
    );
  }
}

const PasswordForgetLink = props => (
  <SecondaryLinkButton href={ROUTES.PASSWORD_FORGET} className="btn-block">
    {props.text}
  </SecondaryLinkButton>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
