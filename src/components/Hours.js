import React from 'react';
import PropTypes from 'prop-types';
import * as CONSTANTS from './Constants';
import { withFirebase } from './Firebase';

class Hours extends React.Component {
  static propTypes = {
    cafe: PropTypes.oneOf(CONSTANTS.CAFE_LOCATIONS).isRequired
  };

  state = {
    isLoading: true,
    hours: {}
  };

  componentDidMount() {
    this.getHoursData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cafe !== this.props.cafe) {
      this.getHoursData();
    }
  }

  getHoursData = () => {
    const hoursRef = this.getHoursRef();

    hoursRef.on('value', snapshot => {
      const hours = snapshot.val();

      this.setState({
        hours: hours,
        isLoading: false
      });
    });
  };

  getHoursRef() {
    switch (this.props.cafe) {
      case CONSTANTS.SOMERVILLE:
        return this.props.firebase.somervilleHours();
      case CONSTANTS.BROOKLINE:
      default:
        return this.props.firebase.brooklineHours();
    }
  }

  render() {
    const { hours } = this.state;

    return (
      <div className="container text-left">
        <h1 className="display-4">Hours</h1>
        <p>
          Monday: <br className="d-sm-none d-md-block d-lg-none" />
          {hours.monday}
        </p>
        <p>
          Tuesday: <br className="d-sm-none d-md-block d-lg-none" />
          {hours.tuesday}
        </p>
        <p>
          Wednesday: <br className="d-sm-none d-md-block d-lg-none" />
          {hours.wednesday}
        </p>
        <p>
          Thursday: <br className="d-sm-none d-md-block d-lg-none" />
          {hours.thursday}
        </p>
        <p>
          Friday: <br className="d-sm-none d-md-block d-lg-none" />
          {hours.friday}
        </p>
        <p>
          Saturday: <br className="d-sm-none d-md-block d-lg-none" />
          {hours.saturday}
        </p>
        <p>
          Sunday: <br className="d-sm-none d-md-block d-lg-none" />
          {hours.sunday}
        </p>
      </div>
    );
  }
}

export default withFirebase(Hours);
