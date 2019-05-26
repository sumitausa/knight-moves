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

class Somerville extends React.Component {
  state = {
    cafeData: {},
    isLoading: true
  };

  componentDidMount() {
    this.props.firebase.somerville().on('value', snapshot => {
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
            <LeadJumbo cafe={CONSTANTS.SOMERVILLE} />

            <AboutJumbo cafe={CONSTANTS.SOMERVILLE} />

            <ParallaxJumbo img={SocialMediaImage} />

            <SocialMediaJumbo cafe={CONSTANTS.SOMERVILLE} />

            <ParallaxJumbo img={MenuImage} />

            <Menu cafe={CONSTANTS.SOMERVILLE} />

            {/* <EventsJumbo /> */}
          </div>
        )}
      </div>
    );
  }
}

export default withFirebase(Somerville);
