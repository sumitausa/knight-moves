import React from "react";
import PropTypes from "prop-types";

const ContactInfo = props => {
  return (
    <div className="container text-left">
      <h1 className="display-4">Contact Us</h1>
      <address className="text-left">
        <a href={`mailto:${props.contact.email}`}>{props.contact.email}</a>
        <br />
        <a href={`tel:${props.contact.phone}`}>{props.contact.phone}</a>
        <br />
        {props.contact.cafeName}
        <br />
        {props.contact.streetAddress}
        <br />
        {props.contact.city}, {props.contact.state} {props.contact.zipCode}
        <br />
        {props.contact.country}
      </address>
    </div>
  );
};

ContactInfo.propTypes = {
  contact: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    cafeName: PropTypes.string.isRequired,
    streetAddress: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
  }).isRequired
};

export default ContactInfo;
