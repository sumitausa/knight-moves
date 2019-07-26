import React from 'react';
import PropTypes from 'prop-types';
import LeadJumbo from './LeadJumbo';
//import EventsJumbo from './EventsJumbo';
import SocialMediaJumbo from './SocialMediaJumbo';
import Menu from './Menu';
import AboutJumbo from './AboutJumbo';
import ParallaxJumbo from './ParallaxJumbo';
import * as CONSTANTS from './Constants';

class Cafe extends React.Component {
  render() {
    return (
      <div>
        <div id="top">
          <LeadJumbo cafe={this.props.cafeLocation} />

          <AboutJumbo cafe={this.props.cafeLocation} />

          <ParallaxJumbo img={'imgs/socialMediaImage.jpg'} />

          <SocialMediaJumbo cafe={this.props.cafeLocation} />

          <ParallaxJumbo img={'imgs/menuImage.jpg'} />

          <Menu cafe={this.props.cafeLocation} />

          {/* <ParallaxJumbo img={EventsImage} /> */}

          {/* <EventsJumbo /> */}
        </div>
      </div>
    );
  }
}

Cafe.propTypes = {
  cafeLocation: PropTypes.oneOf(CONSTANTS.CAFE_LOCATIONS).isRequired
};

export default Cafe;
