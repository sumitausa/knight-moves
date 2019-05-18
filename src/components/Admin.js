import React from 'react';
import Container from 'react-bootstrap/Container';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import UsersEditContainer from './UsersEditContainer';
import ContactTyrel from './ContactTyrel';
import { withFirebase } from './Firebase';

const BROOKLINE = 'Brookline';
const SOMERVILLE = 'Somerville';
const USERS = 'Users';
const SOMETHING_ELSE = 'Something Else';

class Admin extends React.Component {
  state = {
    selected: null,
    loadedData: null
  };

  handleSelect = eventKey => {
    this.setState({
      selected: eventKey
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
        >
          <Dropdown.Item eventKey={BROOKLINE}>{BROOKLINE}</Dropdown.Item>
          <Dropdown.Item eventKey={SOMERVILLE}>{SOMERVILLE}</Dropdown.Item>
          <Dropdown.Item eventKey={USERS}>{USERS}</Dropdown.Item>
          <Dropdown.Item eventKey={SOMETHING_ELSE}>
            {SOMETHING_ELSE}
          </Dropdown.Item>
        </DropdownButton>

        {/*         {this.state.selected === BROOKLINE && ( */}
        {/*           <BrooklineEditContainer>Hello</BrooklineEditContainer> */}
        {/*         )} */}
        {/*  */}
        {/*         {this.state.selected === SOMERVILLE && ( */}
        {/*           <SomervilleEditContainer>Hello</SomervilleEditContainer> */}
        {/*         )} */}
        {/*  */}
        {this.state.selected === USERS && <UsersEditContainer />}

        {this.state.selected === SOMETHING_ELSE && <ContactTyrel />}
      </Container>
    );
  }
}

export default withFirebase(Admin);
