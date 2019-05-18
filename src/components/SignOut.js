import React from 'react';
import { withFirebase } from './Firebase';
import Button from 'react-bootstrap/Button';

const SignOutButton = ({ firebase }) => {
  return (
    <Button variant="cta" type="button" onClick={firebase.doSignOut}>
      Sign Out
    </Button>
  );
};

export default withFirebase(SignOutButton);
