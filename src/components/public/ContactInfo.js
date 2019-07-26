import React from 'react';
import PropTypes from 'prop-types';
import * as CONSTANTS from '../Constants';
import { withFirebase } from '../Firebase';

class ContactInfo extends React.Component {
  static propTypes = {
    cafe: PropTypes.oneOf(CONSTANTS.CAFE_LOCATIONS).isRequired
  };

  state = {
    isLoading: true,
    contactInfo: {}
  };

  componentDidMount() {
    this.getContactData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cafe !== this.props.cafe) {
      this.getContactData();
    }
  }

  getContactData = () => {
    const contactRef = this.getContactRef();

    contactRef.on('value', snapshot => {
      const contactInfo = snapshot.val();

      this.setState({
        contactInfo: contactInfo,
        isLoading: false
      });
    });
  };

  getContactRef = () => {
    switch (this.props.cafe) {
      case CONSTANTS.SOMERVILLE:
        return this.props.firebase.somervilleContact();
      case CONSTANTS.BROOKLINE:
      default:
        return this.props.firebase.brooklineContact();
    }
  };

  render() {
    const { contactInfo } = this.state;

    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <span />
        ) : (
          <div className="container text-left">
            <h1 className="display-4">Contact Us</h1>
            <address className="text-left">
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              <br />
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              <br />
              {contactInfo.cafeName}
              <br />
              {contactInfo.streetAddress}
              <br />
              {contactInfo.city}, {contactInfo.state} {contactInfo.zipCode}
              <br />
              {contactInfo.country}
            </address>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withFirebase(ContactInfo);
