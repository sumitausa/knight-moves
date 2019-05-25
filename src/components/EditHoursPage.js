import React from 'react';
import * as CONSTANTS from './Constants';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withFirebase } from './Firebase';

class EditHoursPage extends React.Component {
  state = {
    isLoading: true,
    message: '',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: ''
  };

  componentDidMount() {
    const hoursRef = this.getHoursRef();

    if (hoursRef) {
      hoursRef.on('value', snapshot => {
        const hours = snapshot.val();

        this.setState({
          monday: hours.monday,
          tuesday: hours.tuesday,
          wednesday: hours.wednesday,
          thursday: hours.thursday,
          friday: hours.friday,
          saturday: hours.saturday,
          sunday: hours.sunday,
          isLoading: false
        });
      });
    }
  }

  getHoursRef = () => {
    switch (this.props.cafe) {
      case CONSTANTS.BROOKLINE:
        return this.props.firebase.brooklineHours();
      case CONSTANTS.SOMERVILLE:
        return this.props.firebase.somervilleHours();
      default:
        this.setState({
          message:
            'Something is very wrong with the edit page. Contact Tyrel ASAP.'
        });
        return null;
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      message: ''
    });
  };

  saveData = () => {
    const hoursRef = this.getHoursRef();

    hoursRef
      .update({
        monday: this.state.monday,
        tuesday: this.state.tuesday,
        wednesday: this.state.wednesday,
        thursday: this.state.thursday,
        friday: this.state.friday,
        saturday: this.state.saturday,
        sunday: this.state.sunday
      })
      .then(() => {
        this.setState({
          message: 'Success! Go to the main website to confirm your changes.'
        });
      })
      .catch(error => {
        this.setState({ message: error.message });
      });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <span>Loading...</span>
        ) : (
          <Form>
            <Form.Group controlId="monday">
              <Form.Label>Monday</Form.Label>
              <Form.Control
                type="text"
                placeholder="Monday Hours"
                value={this.state.monday}
                name="monday"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="tuesday">
              <Form.Label>Tuesday</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tuesday Hours"
                value={this.state.tuesday}
                name="tuesday"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="wednesday">
              <Form.Label>Wednesday</Form.Label>
              <Form.Control
                type="text"
                placeholder="Wednesday Hours"
                value={this.state.wednesday}
                name="wednesday"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="thursday">
              <Form.Label>Thursday</Form.Label>
              <Form.Control
                type="text"
                placeholder="Thursday Hours"
                value={this.state.thursday}
                name="thursday"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="friday">
              <Form.Label>Friday</Form.Label>
              <Form.Control
                type="text"
                placeholder="Friday Hours"
                value={this.state.friday}
                name="friday"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="saturday">
              <Form.Label>Saturday</Form.Label>
              <Form.Control
                type="text"
                placeholder="Saturday Hours"
                value={this.state.saturday}
                name="saturday"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="sunday">
              <Form.Label>Sunday</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sunday Hours"
                value={this.state.sunday}
                name="sunday"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="cta" onClick={this.saveData} type="button">
              Save Hours
            </Button>
            <p>{this.state.message}</p>
          </Form>
        )}
      </React.Fragment>
    );
  }
}

export default withFirebase(EditHoursPage);
