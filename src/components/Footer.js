import React from 'react';
import SocialMediaBar from './SocialMediaBar';
import { withFirebase } from './Firebase';

class Footer extends React.Component {
  state = {
    isLoading: true,
    cafeObj: {}
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
      <footer className="footer sticky-footer bar-bg">
        <a href="/">&copy; Knight Moves Cafe 2019</a>
        {this.state.isLoading ? (
          <span />
        ) : (
          <span className="float-right mr-4">
            <SocialMediaBar
              className="btn-sm"
              data={this.state.cafeData.socialLinks}
            />
          </span>
        )}
      </footer>
    );
  }
}

export default withFirebase(Footer);
