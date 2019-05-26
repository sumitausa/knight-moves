import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Story from './Story';
import Hours from './Hours';
import ContactInfo from './ContactInfo';
import HowItWorks from './HowItWorks';
import * as CONSTANTS from './Constants';
import { withFirebase } from './Firebase';

const AboutJumbo = props => {
  return (
    <React.Fragment>
      <Jumbotron fluid id="HowItWorks" className="paral paralsec-text">
        <Container>
          <div className="col-12">
            <div className="row">
              <div className="col-md-8">
                <HowItWorks cafe={props.cafe} />
              </div>
              <div className="col-md-4">
                <ContactInfo cafe={props.cafe} />
                <Hours cafe={props.cafe} />
              </div>
            </div>
            <div id="story" />
            <Story />
          </div>
        </Container>
      </Jumbotron>
    </React.Fragment>
  );
};

AboutJumbo.propTypes = {
  cafe: PropTypes.oneOf(CONSTANTS.CAFE_LOCATIONS).isRequired
};

export default withFirebase(AboutJumbo);
