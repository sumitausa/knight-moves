import React from 'react';
import LeadJumbo from './LeadJumbo';
//import EventsJumbo from './EventsJumbo';
import SocialMediaJumbo from './SocialMediaJumbo';
import Menu from './Menu';
import Loading from './Loading';
import AboutJumbo from './AboutJumbo';
import ParallaxJumbo from './ParallaxJumbo';
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
          <Loading />
        ) : (
          <div id="top">
            <LeadJumbo cafeLocation="Brookline" />

            <AboutJumbo
              story={this.state.cafeData.story}
              howItWorks={this.state.cafeData.howItWorks}
              contact={this.state.cafeData.contact}
              hours={this.state.cafeData.hours}
            />

            <ParallaxJumbo img={SocialMediaImage} />

            <SocialMediaJumbo socialData={this.state.cafeData.socialLinks} />

            <ParallaxJumbo img={MenuImage} />

            <Menu menu={this.state.cafeData.menu} />

            {/* <ParallaxJumbo img={EventsImage} /> */}

            {/* <EventsJumbo /> */}
          </div>
        )}
      </div>
    );
  }
}

export default withFirebase(Brookline);
