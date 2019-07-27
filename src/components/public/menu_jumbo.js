import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import MenuGroup from './MenuGroup';
import * as CONSTANTS from '../Constants';
import { withFirebase } from '../Firebase';

class Menu extends React.Component {
  static propTypes = {
    cafe: PropTypes.oneOf(CONSTANTS.CAFE_LOCATIONS).isRequired
  };

  state = {
    menu: {},
    isLoading: true
  };

  componentDidMount() {
    this.getMenuData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cafe !== this.props.cafe) {
      this.getMenuData();
    }
  }

  getMenuData = () => {
    const menuRef = this.getMenuRef();

    menuRef.on('value', snapshot => {
      const menu = snapshot.val();

      this.setState({
        menu: menu,
        isLoading: false
      });
    });
  };

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
        <Jumbotron fluid id="menu" className="paral paralsec-text">
          <div>
            <div className="row">
              <Container>
                <h1 className="display-4">Our Menu</h1>
                {Object.keys(this.state.menu).map(key => {
                  return (
                    <MenuGroup
                      key={key}
                      groupName={this.state.menu[key].name}
                      products={this.state.menu[key].products}
                    />
                  );
                })}
              </Container>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default withFirebase(Menu);
