import React from 'react';
import { withFirebase } from './Firebase';

class EditMenuPage extends React.Component {
  state = {
    isLoading: false,
    contact: {}
  };

  render() {
    return (
      <React.Fragment>
        <div>menu Edit</div>
      </React.Fragment>
    );
  }
}

export default withFirebase(EditMenuPage);
