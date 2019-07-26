import React from 'react';
import { withFirebase } from './Firebase';

class Story extends React.Component {
  state = {
    isLoading: true,
    story: {}
  };

  componentDidMount() {
    this.props.firebase.story().on('value', snapshot => {
      const story = snapshot.val();

      this.setState({
        story: story,
        isLoading: false
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <span />
        ) : (
          <div className="container">
            <h1 className="display-4">Our Story</h1>
            <div className="text-justify">
              {Object.keys(this.state.story).map(para => {
                return <p key={para}>{this.state.story[para]}</p>;
              })}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withFirebase(Story);
