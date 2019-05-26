import React from 'react';
import PropTypes from 'prop-types';
import * as CONSTANTS from './Constants';
import { withFirebase } from './Firebase';

class HowItWorks extends React.Component {
  static propTypes = {
    cafe: PropTypes.oneOf(CONSTANTS.CAFE_LOCATIONS).isRequired
  };

  state = {
    isLoading: true,
    data: {}
  };

  componentDidMount() {
    this.getHowItWorksData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cafe !== this.props.cafe) {
      this.getHowItWorksData();
    }
  }

  getHowItWorksData = () => {
    const howItWorksRef = this.getHowItWorksRef();

    howItWorksRef.on('value', snapshot => {
      const data = snapshot.val();

      this.setState({
        data: data,
        isLoading: false
      });
    });
  };

  getHowItWorksRef = () => {
    switch (this.props.cafe) {
      case CONSTANTS.SOMERVILLE:
        return this.props.firebase.somervilleHowItWorks();
      case CONSTANTS.BROOKLINE:
      default:
        return this.props.firebase.brooklineHowItWorks();
    }
  };

  render() {
    const { data } = this.state;

    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <span />
        ) : (
          <div className="col-12 text-left">
            <h1 className="display-4">How it Works</h1>
            <p>{data.lead}</p>
            {Object.keys(data.qaPairs).map(key => {
              return (
                <React.Fragment key={key}>
                  <h3>{data.qaPairs[key].question}</h3>
                  <p>{data.qaPairs[key].answer}</p>
                </React.Fragment>
              );
            })}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withFirebase(HowItWorks);
