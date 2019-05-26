import React from 'react';
import LeadJumbo from './LeadJumbo';
//import EventsJumbo from './EventsJumbo';
import SocialMediaJumbo from './SocialMediaJumbo';
import Menu from './Menu';
import AboutJumbo from './AboutJumbo';
import ParallaxJumbo from './ParallaxJumbo';
import Spinner from 'react-bootstrap/Spinner';
import * as CONSTANTS from './Constants';
import { withFirebase } from './Firebase';

import SocialMediaImage from '../shelves2.jpg';
import MenuImage from '../baked_goods_in_platter.jpg';

class Brookline extends React.Component {
  state = {
    cafeData: {},
    isLoading: true
  };

  componentDidMount() {
    this.props.firebase.brookline().on('value', snapshot => {
      const cafeObj = snapshot.val();

      this.setState({
        cafeData: cafeObj,
        isLoading: false
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          <div id="top">
            <LeadJumbo cafe={CONSTANTS.BROOKLINE} />

            <AboutJumbo cafe={CONSTANTS.BROOKLINE} />

            <ParallaxJumbo img={SocialMediaImage} />

            <SocialMediaJumbo cafe={CONSTANTS.BROOKLINE} />

            <ParallaxJumbo img={MenuImage} />

            <Menu cafe={CONSTANTS.BROOKLINE} />

            {/* <ParallaxJumbo img={EventsImage} /> */}

            {/* <EventsJumbo /> */}
          </div>
        )}
      </div>
    );
  }
}

export default withFirebase(Brookline);
