import React from 'react';
import * as CONSTANTS from './Constants';
import { withFirebase } from './Firebase';

class EditMenuPage extends React.Component {
  state = {
    isLoading: true,
    menu: {}
  };

  componentDidMount() {
    const menuRef = this.getMenuRef();

    if (menuRef) {
      menuRef.on('value', snapshot => {
        //const menu = snapshot.val();

        this.setState({
          isLoading: false
        });
      });
    }
  }

  getMenuRef = () => {
    switch (this.props.cafe) {
      case CONSTANTS.BROOKLINE:
        return this.props.firebase.brooklineMenu();
      case CONSTANTS.SOMERVILLE:
        return this.props.firebase.somervilleMenu();
      default:
        this.setState({
          message:
            'Something is very wrong with the edit page. Contact Tyrel ASAP.'
        });
        return null;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <p>
            In its current form, the menu will be presented alphabetically. If
            you would like the ability to rearrange them, contact Tyrel.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default withFirebase(EditMenuPage);
