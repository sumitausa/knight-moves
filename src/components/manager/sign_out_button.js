import React from "react";
import { withFirebase } from "../Firebase";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const SignOutButton = ({ firebase }) => {
  return (
    <Button
      enzymeId="signOutButtonSelector"
      variant="cta"
      onClick={firebase.doSignOut}
    >
      Sign Out
    </Button>
  );
};

SignOutButton.propTypes = {
  firebase: PropTypes.shape({
    doSignOut: PropTypes.func.isRequired
  }).isRequired
};

export default withFirebase(SignOutButton);

export const BaseSignOutButton = SignOutButton;
