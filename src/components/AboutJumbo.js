import React from 'react';
import PropTypes from 'prop-types';
import Story from './Story';
import Hours from './Hours';
import ContactInfo from './ContactInfo';
import HowItWorks from './HowItWorks';

const AboutJumbo = props => {
  return (
    <React.Fragment>
      <div
        id="HowItWorks"
        className="jumbotron jumbotron-fluid paral paralsec-text"
      >
        <div className="container">
          <div className="col-12">
            <div className="row">
              <div className="col-md-8">
                <HowItWorks />
              </div>
              <div className="col-md-4">
                <ContactInfo contact={props.contact} />
                <Hours hours={props.hours} />
              </div>
            </div>
            <div id="story" />
            <Story />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

AboutJumbo.propTypes = {
  contact: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    cafeName: PropTypes.string.isRequired,
    streetAddress: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
  }).isRequired,
  hours: PropTypes.shape({
    monday: PropTypes.string.isRequired,
    tuesday: PropTypes.string.isRequired,
    wednesday: PropTypes.string.isRequired,
    thursday: PropTypes.string.isRequired,
    friday: PropTypes.string.isRequired,
    saturday: PropTypes.string.isRequired,
    sunday: PropTypes.string.isRequired
  })
};

export default AboutJumbo;
