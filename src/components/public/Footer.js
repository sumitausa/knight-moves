import React from 'react';
import SocialMediaBar from './SocialMediaBar';
import { withFirebase } from '../Firebase';

class Footer extends React.Component {
  state = {
    isLoading: true,
    socialLinks: {}
  };

  componentDidMount() {
    this.props.firebase.brooklineSocialLinks().on('value', snapshot => {
      const socialLinks = snapshot.val();

      this.setState({
        socialLinks: socialLinks,
        isLoading: false
      });
    });
  }

  render() {
    return (
      <footer className="footer sticky-footer bar-bg">
        <a id="copyright" href="/">
          &copy; Knight Moves Cafe 2019
        </a>
        {this.state.isLoading ? (
          <span />
        ) : (
          <span className="float-right mr-4">
            <SocialMediaBar className="btn-sm" data={this.state.socialLinks} />
          </span>
        )}
      </footer>
    );
  }
}

export default withFirebase(Footer);
