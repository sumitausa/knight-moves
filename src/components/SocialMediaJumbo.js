import React from 'react';
import PropTypes from 'prop-types';
import InstagramFeedContainer from './InstagramFeedContainer';
import SocialMediaBar from './SocialMediaBar';

const SocialMediaJumbo = props => {
  return (
    <React.Fragment>
      <div className="jumbotron paral paralsec3" />
      <div className="jumbotron jumbotron-fluid paral paralsec-text">
        <div className="container">
          <h1 className="display-4">Connect with us on Social Media!</h1>
          <InstagramFeedContainer />
          <div className="pt-4">
            <SocialMediaBar data={props.socialData} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

SocialMediaJumbo.propTypes = {
  socialData: PropTypes.object.isRequired
};

export default SocialMediaJumbo;
