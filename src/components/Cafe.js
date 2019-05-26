import React from 'react';
import PropTypes from 'prop-types';
import LeadJumbo from './LeadJumbo';
//import EventsJumbo from './EventsJumbo';
import SocialMediaJumbo from './SocialMediaJumbo';
import Menu from './Menu';
import AboutJumbo from './AboutJumbo';
import ParallaxJumbo from './ParallaxJumbo';
import * as CONSTANTS from './Constants';

import SocialMediaImage from '../shelves2.jpg';
import MenuImage from '../baked_goods_in_platter.jpg';

const Cafe = props => {
  return (
    <div>
      <div id="top">
        <LeadJumbo cafe={props.cafeLocation} />

        <AboutJumbo cafe={props.cafeLocation} />

        <ParallaxJumbo img={SocialMediaImage} />

        <SocialMediaJumbo cafe={props.cafeLocation} />

        <ParallaxJumbo img={MenuImage} />

        <Menu cafe={props.cafeLocation} />

        {/* <ParallaxJumbo img={EventsImage} /> */}

        {/* <EventsJumbo /> */}
      </div>
    </div>
  );
};

Cafe.propTypes = {
  cafeLocation: PropTypes.oneOf(CONSTANTS.CAFE_LOCATIONS).isRequired
};

export default Cafe;
