import React from 'react';
import { withFirebase } from './Firebase';

class EditSocialLinksPage extends React.Component {
  state = {
    isLoading: false,
    contact: {}
  };

  render() {
    return (
      <React.Fragment>
        <div>social Edit</div>
      </React.Fragment>
    );
  }
}

export default withFirebase(EditSocialLinksPage);
