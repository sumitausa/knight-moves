import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { withFirebase } from './Firebase';
import * as CONSTANTS from './Constants';

class EditContactPage extends React.Component {
  state = {
    cafeName: '',
    streetAddress: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    email: '',
    phone: '',
    message: ''
  };

  componentDidMount() {
    switch (this.props.cafe) {
      case CONSTANTS.BROOKLINE:
        this.loadBrooklineData();
        break;
      case CONSTANTS.SOMERVILLE:
        this.loadSomervilleData();
        break;
      default:
        this.setState({
          errMessage:
            'Something is very wrong with the edit page. Contact Tyrel ASAP.'
        });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      message: ''
    });
  };

  loadBrooklineData = () => {
    this.props.firebase.brooklineContact().on('value', snapshot => {
      const contact = snapshot.val();

      this.setState({
        cafeName: contact.cafeName,
        streetAddress: contact.streetAddress,
        city: contact.city,
        state: contact.state,
        country: contact.country,
        zipCode: contact.zipCode,
        email: contact.email,
        phone: contact.phone
      });
    });
  };

  loadSomervilleData = () => {
    this.props.firebase.somervilleContact().on('value', snapshot => {
      const contact = snapshot.val();

      this.setState({
        cafeName: contact.cafeName,
        streetAddress: contact.streetAddress,
        city: contact.city,
        state: contact.state,
        country: contact.country,
        zipCode: contact.zipCode,
        email: contact.email,
        phone: contact.phone
      });
    });
  };

  saveData = () => {
    if (this.props.cafe === CONSTANTS.SOMERVILLE) {
      this.props.firebase
        .somerville()
        .update({
          contact: {
            cafeName: this.state.cafeName,
            streetAddress: this.state.streetAddress,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            zipCode: this.state.zipCode,
            email: this.state.email,
            phone: this.state.phone
          }
        })
        .then(() => {
          this.setState({
            message: 'Success! Go to the main website to confirm your changes.'
          });
        })
        .catch(error => {
          this.setState({ message: error });
        });
    } else if (this.props.cafe === CONSTANTS.BROOKLINE) {
      this.props.firebase
        .brookline()
        .update({
          contact: {
            cafeName: this.state.cafeName,
            streetAddress: this.state.streetAddress,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            zipCode: this.state.zipCode,
            email: this.state.email,
            phone: this.state.phone
          }
        })
        .then(() => {
          this.setState({
            message: 'Success! Go to the main website to confirm your changes.'
          });
        })
        .catch(error => {
          this.setState({ message: error });
        });
    }
  };

  render() {
    return (
      <React.Fragment>
        <Container className="col-md-6">
          <Form>
            <Form.Group controlId="cafeName">
              <Form.Label>Cafe Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cafe Name"
                value={this.state.cafeName}
                name="cafeName"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="streetAddress">
              <Form.Label>Street Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Street Address"
                value={this.state.streetAddress}
                name="streetAddress"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                value={this.state.city}
                name="city"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                value={this.state.state}
                name="state"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Country"
                value={this.state.country}
                name="country"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="zipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip Code"
                value={this.state.zipCode}
                name="zipCode"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email Address"
                value={this.state.email}
                name="email"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                value={this.state.phone}
                name="phone"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="cta" onClick={this.saveData} type="button">
              Save Contact
            </Button>
            <p>{this.state.message}</p>
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

export default withFirebase(EditContactPage);
