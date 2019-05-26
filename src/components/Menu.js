import React from 'react';
import PropTypes from 'prop-types';
import MenuGroup from './MenuGroup';
import * as CONSTANTS from './Constants';
import { withFirebase } from './Firebase';

class Menu extends React.Component {
  static propTypes = {
    cafe: PropTypes.oneOf(CONSTANTS.CAFE_LOCATIONS).isRequired
  };

  state = {
    menu: {},
    isLoading: true
  };

  componentDidMount() {
    const menuRef = this.getMenuRef();

    menuRef.on('value', snapshot => {
      const menu = snapshot.val();

      this.setState({
        menu: menu,
        isLoading: false
      });
    });
  }

  getMenuRef() {
    switch (this.props.cafe) {
      case CONSTANTS.SOMERVILLE:
        return this.props.firebase.somervilleMenu();
      case CONSTANTS.BROOKLINE:
      default:
        return this.props.firebase.brooklineMenu();
    }
  }

  render() {
    return (
      <React.Fragment>
        <div
          id="menu"
          className="jumbotron jumbotron-fluid paral paralsec-text"
        >
          <div>
            <div className="row">
              <div className="container">
                <h1 className="display-4">Our Menu</h1>
                {Object.keys(this.state.menu).map(key => {
                  return (
                    <MenuGroup
                      key={key}
                      groupName={key}
                      products={this.state.menu[key]}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withFirebase(Menu);
