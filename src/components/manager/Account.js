import React from 'react';
import { PasswordForgetForm } from './PasswordForget';
import Container from 'react-bootstrap/Container';
import { withAuthorization } from '../Session';

const AccountPage = () => (
  <Container>
    <h1>Account Page</h1>
    <PasswordForgetForm />
  </Container>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
