import React from "react";
import { withFirebase } from "./Firebase";
import CallToActActionButton from "./CallToActActionButton";

const SignOutButton = ({ firebase }) => {
  return (
    <CallToActActionButton type="button" onClick={firebase.doSignOut}>
      Sign Out
    </CallToActActionButton>
  );
};

export default withFirebase(SignOutButton);
