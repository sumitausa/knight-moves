import React from 'react';
import Loading from './Loading';
import LeadJumbo from './LeadJumbo';
//import EventsJumbo from './EventsJumbo';
import SocialMediaJumbo from './SocialMediaJumbo';
import Menu from './Menu';
import AboutJumbo from './AboutJumbo';
import { withFirebase } from './Firebase';

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
          <Loading />
        ) : (
          <div id="top">
            <LeadJumbo cafeLocation="Somerville" />

            <AboutJumbo
              contact={this.state.cafeData.contact}
              hours={this.state.cafeData.hours}
            />

            <SocialMediaJumbo socialData={this.state.cafeData.socialLinks} />

            <Menu menu={this.state.cafeData.menu} />

            {/* <EventsJumbo /> */}
          </div>
        )}
      </div>
    );
  }
}

export default withFirebase(Somerville);
