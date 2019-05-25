import React from 'react';
import { withFirebase } from './Firebase';

class SomervilleEditContainer extends React.Component {
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
    console.log(this.state);
    return (
      <React.Fragment>
        <div>
          <p>World</p>
        </div>
      </React.Fragment>
    );
  }
}

export default withFirebase(SomervilleEditContainer);
