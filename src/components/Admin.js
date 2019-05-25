import React from 'react';
import Container from 'react-bootstrap/Container';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import EditPage from './EditPage';
import UsersEditContainer from './UsersEditContainer';
import ContactTyrel from './ContactTyrel';
import * as CONSTANTS from './Constants';

class Admin extends React.Component {
  state = {
    selected: null,
    isButtonDisabled: false
  };

  handleSelect = eventKey => {
    this.setState({
      selected: eventKey
    });
  };

  disableButton = () => {
    this.setState({
      isButtonDisabled: true
    });
  };

  enableButton = () => {
    this.setState({
      isButtonDisabled: false
    });
  };

  render() {
    return (
      <Container>
        <h1>ADMIN PAGE</h1>
        <h3>What would you like to edit?</h3>

        <DropdownButton
          variant="cta"
          title={this.state.selected ? this.state.selected : 'Select One'}
          id="basic-nav-dropdown"
          onSelect={this.handleSelect}
          disabled={this.state.isButtonDisabled}
        >
          <Dropdown.Item eventKey={CONSTANTS.BROOKLINE}>
            {CONSTANTS.BROOKLINE}
          </Dropdown.Item>
          <Dropdown.Item eventKey={CONSTANTS.SOMERVILLE}>
            {CONSTANTS.SOMERVILLE}
          </Dropdown.Item>
          <Dropdown.Item eventKey={CONSTANTS.USERS}>
            {CONSTANTS.USERS}
          </Dropdown.Item>
          <Dropdown.Item eventKey={CONSTANTS.SOMETHING_ELSE}>
            {CONSTANTS.SOMETHING_ELSE}
          </Dropdown.Item>
        </DropdownButton>

        {this.state.selected === CONSTANTS.BROOKLINE && (
          <EditPage
            cafe={CONSTANTS.BROOKLINE}
            enableButton={this.enableButton}
            disableButton={this.disableButton}
          />
        )}

        {this.state.selected === CONSTANTS.SOMERVILLE && (
          <EditPage
            cafe={CONSTANTS.SOMERVILLE}
            enableButton={this.enableButton}
            disableButton={this.disableButton}
          />
        )}

        {this.state.selected === CONSTANTS.USERS && <UsersEditContainer />}

        {this.state.selected === CONSTANTS.SOMETHING_ELSE && <ContactTyrel />}
      </Container>
    );
  }
}

export default Admin;
