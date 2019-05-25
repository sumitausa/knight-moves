import React from 'react';
import { withFirebase } from './Firebase';

class BrooklineEditContainer extends React.Component {
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
    console.log(this.state);
    return (
      <React.Fragment>
        <div>
          <p>Hello</p>
        </div>
      </React.Fragment>
    );
  }
}

export default withFirebase(BrooklineEditContainer);
