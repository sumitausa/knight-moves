import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import * as CONSTANTS from '../Constants';

const LeadJumbo = props => {
  return (
    <Jumbotron
      fluid
      id="leadJumbo"
      className="paral paralsec-main"
      style={{
        backgroundImage: 'url(/imgs/leadImage.jpg)'
      }}
    >
      <div className="container">
        <div className="row">
          <div className="container col-sm-12 col-md-12 align-self-center">
            <div>
              <h1 className="display-4">Knight Moves Cafe {props.cafe}</h1>
              <p className="lead">
                Thousands of Games | One Community
              </p>
            </div>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
};

LeadJumbo.propTypes = {
  cafe: PropTypes.oneOf(CONSTANTS.CAFE_LOCATIONS).isRequired
};

export default LeadJumbo;
