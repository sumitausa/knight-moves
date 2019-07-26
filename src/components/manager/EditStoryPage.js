import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withFirebase } from '../Firebase';

const PARAGRAPH_SEPARATOR = '\n-----\n';

class EditStoryPage extends React.Component {
  state = {
    isLoading: false,
    story: '',
    contact: {}
  };

  componentDidMount() {
    const storyRef = this.getStoryRef();

    if (storyRef) {
      storyRef.on('value', snapshot => {
        const story = snapshot.val();

        let storyString = '';

        for (var key in story) {
          if (story.hasOwnProperty(key)) {
            storyString += story[key] + PARAGRAPH_SEPARATOR;
          }
        }

        // Remove trailing PARAGRAPH_SEPARATOR
        storyString = storyString.slice(0, -1 * PARAGRAPH_SEPARATOR.length);

        this.setState({
          story: storyString,
          isLoading: false
        });
      });
    }
  }

  getStoryRef = () => {
    const storyRef = this.props.firebase.story();

    if (!storyRef) {
      this.setState({
        message:
          'Something is very wrong with the edit page. Contact Tyrel ASAP.'
      });
      return null;
    } else {
      return storyRef;
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      message: ''
    });
  };

  saveData = () => {
    const storyRef = this.getStoryRef();

    const storyObject = this.buildStoryObject();

    storyRef
      .set(storyObject)
      .then(() => {
        this.setState({
          message: 'Success! Go to the main website to confirm your changes.'
        });
      })
      .catch(error => {
        this.setState({ message: error.message });
      });
  };

  buildStoryObject = () => {
    const paragraphs = this.state.story.split(PARAGRAPH_SEPARATOR);

    let storyObject = {};

    paragraphs.forEach((paragraph, index) => {
      storyObject[`p${index + 1}`] = paragraph;
    });

    return storyObject;
  };

  render() {
    return (
      <React.Fragment>
        <p>
          To separate paragraphs, insert five (5) dashes '-----' all on their
          own line. The only thing on the entire line should be the dashes.
          Please be sure there are no spaces or other text. Failure to follow
          this format will result in your website not presenting as expected.
        </p>
        <Form.Group controlId="story">
          <Form.Label>{this.props.cafe} Story</Form.Label>
          <Form.Control
            name="story"
            as="textarea"
            rows="3"
            value={this.state.story}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="cta" onClick={this.saveData} type="button">
          Save Story
        </Button>
        <h3>{this.state.message}</h3>
      </React.Fragment>
    );
  }
}

export default withFirebase(EditStoryPage);
