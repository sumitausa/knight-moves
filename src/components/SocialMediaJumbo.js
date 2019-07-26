import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import InstagramFeedContainer from './InstagramFeedContainer';
import SocialMediaBar from './SocialMediaBar';
import * as CONSTANTS from './Constants';
import { withFirebase } from './Firebase';

class SocialMediaJumbo extends React.Component {
  static propTypes = {
    cafe: PropTypes.oneOf(CONSTANTS.CAFE_LOCATIONS).isRequired
  };

  state = {
    isLoading: true,
    socialLinks: {}
  };

  componentDidMount() {
    const socialLinksRef = this.getSocialLinksRef();

    socialLinksRef.on('value', snapshot => {
      const socialLinks = snapshot.val();

      this.setState({
        socialLinks: socialLinks,
        isLoading: false
      });
    });
  }

  getSocialLinksRef() {
    switch (this.props.cafe) {
      case CONSTANTS.SOMERVILLE:
        return this.props.firebase.somervilleSocialLinks();
      case CONSTANTS.BROOKLINE:
      default:
        return this.props.firebase.brooklineSocialLinks();
    }
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid className="paral paralsec-text">
          <div className="container">
            <h1 className="display-4">Connect with us on Social Media!</h1>
            <InstagramFeedContainer />
            <div className="pt-4">
              <SocialMediaBar data={this.state.socialLinks} />
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default withFirebase(SocialMediaJumbo);
