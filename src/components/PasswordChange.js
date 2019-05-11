import React from 'react';
import { withFirebase } from './Firebase';
import Button from 'react-bootstrap/Button';
import FormInput from './FormInput';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null
};

class PasswordChangeForm extends React.Component {
  state = INITIAL_STATE;

  onSubmit = event => {
    this.props.firebase
      .doPasswordUpdate(this.state.passwordOne)
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
    const isInvalid =
      this.state.passwordOne !== this.state.passwordTwo ||
      this.state.passwordOne === '';

    return (
      <form onSubmit={this.onSubmit}>
        <FormInput
          name="passwordOne"
          value={this.state.passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="New Password"
        />
        <FormInput
          name="passwordTwo"
          value={this.state.passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm New Password"
        />
        <Button
          variant="cta"
          className="btn-lg btn-block"
          disabled={isInvalid}
          type="submit"
        >
          Reset My Password
        </Button>
      </form>
    );
  }
}

export default withFirebase(PasswordChangeForm);
