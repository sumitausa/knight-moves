import React from 'react';
import { withFirebase } from './Firebase';

class EditHowItWorksPage extends React.Component {
  state = {
    isLoading: false,
    contact: {}
  };

  render() {
    return (
      <React.Fragment>
        <div>works Edit</div>
      </React.Fragment>
    );
  }
}

export default withFirebase(EditHowItWorksPage);
