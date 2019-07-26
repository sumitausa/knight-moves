import React from 'react';
import * as CONSTANTS from './Constants';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { withFirebase } from './Firebase';

class EditHowItWorksPage extends React.Component {
  state = {
    isLoading: true,
    lead: '',
    questions: [{ question: '', answer: '' }],
    message: ''
  };

  componentDidMount() {
    const howItWorksRef = this.getHowItWorksRef();

    if (howItWorksRef) {
      howItWorksRef.on('value', snapshot => {
        const howItWorks = snapshot.val();

        const questionList = [];
        Object.keys(howItWorks.qaPairs).forEach(key => {
          questionList.push(howItWorks.qaPairs[key]);
        });

        this.setState({
          lead: howItWorks.lead,
          questions: questionList,
          isLoading: false
        });
      });
    }
  }

  getHowItWorksRef = () => {
    switch (this.props.cafe) {
      case CONSTANTS.BROOKLINE:
        return this.props.firebase.brooklineHowItWorks();
      case CONSTANTS.SOMERVILLE:
        return this.props.firebase.somervilleHowItWorks();
      default:
        this.setState({
          message:
            'Something is very wrong with the edit page. Contact Tyrel ASAP.'
        });
        return null;
    }
  };

  saveData = () => {
    const questionList = this.state.questions;

    const qaPairs = {};
    questionList.forEach((item, index) => {
      const key = `q${index}`;

      qaPairs[key] = item;
    });

    const howItWorksRef = this.getHowItWorksRef();
    howItWorksRef
      .set({
        lead: this.state.lead,
        qaPairs: qaPairs
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

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      message: ''
    });
  };

  handleQuestionChange = e => {
    const isQuestionField = e.target.name[0] === 'q'; // otherwise, isAnswer
    const index = e.target.name.slice(1);

    const questionList = [...this.state.questions];

    isQuestionField
      ? (questionList[index].question = e.target.value)
      : (questionList[index].answer = e.target.value);

    this.setState({ questions: questionList, message: '' });
  };

  addQuestion = e => {
    this.setState(prevState => ({
      questions: [...prevState.questions, { question: '', answer: '' }]
    }));
  };

  moveQuestionUp = index => {
    const questionList = this.state.questions;

    const clickQuestion = questionList[index];
    questionList[index] = questionList[index - 1];
    questionList[index - 1] = clickQuestion;

    this.setState({
      questions: questionList
    });
  };

  moveQuestionDown = index => {
    const questionList = this.state.questions;

    const clickQuestion = questionList[index];
    questionList[index] = questionList[index + 1];
    questionList[index + 1] = clickQuestion;

    this.setState({
      questions: questionList
    });
  };

  deleteQuestion = index => {
    const questionList = this.state.questions;

    questionList.splice(index, 1);

    this.setState({
      questions: questionList
    });
  };

  render() {
    return (
      <React.Fragment>
        <p>
          These questions will be presented in the same order you put them in.
          To have a question be the first one presented, move it to the top of
          the page.
        </p>
        {this.state.isLoading ? (
          <span>Loading...</span>
        ) : (
          <Form>
            <Form.Group controlId="lead">
              <Form.Label>Lead Paragraph</Form.Label>
              <Form.Control
                name="lead"
                as="textarea"
                rows="3"
                value={this.state.lead}
                onChange={this.handleChange}
              />
            </Form.Group>
            {this.state.questions.map((val, index) => {
              const questionId = `q${index}`;
              const answerId = `a${index}`;
              const listLength = this.state.questions.length;

              return (
                <Container className="editContainer" key={index}>
                  <Form.Group controlId={questionId}>
                    <Form.Label>Question</Form.Label>
                    <Form.Control
                      name={questionId}
                      type="text"
                      placeholder="Question"
                      value={this.state.questions[index].question}
                      onChange={this.handleQuestionChange}
                    />
                  </Form.Group>
                  <Form.Group controlId={answerId}>
                    <Form.Label>Answer</Form.Label>
                    <Form.Control
                      name={answerId}
                      as="textarea"
                      placeholder="Answer"
                      value={this.state.questions[index].answer}
                      onChange={this.handleQuestionChange}
                    />
                  </Form.Group>
                  <div className="text-right">
                    {index !== 0 && (
                      <Button
                        variant="secondary"
                        onClick={() => this.moveQuestionUp(index)}
                        type="button"
                      >
                        <i className={`fas fa-arrow-up`} />
                        Move Up
                      </Button>
                    )}
                    {index !== listLength - 1 && (
                      <Button
                        variant="secondary"
                        onClick={() => this.moveQuestionDown(index)}
                        type="button"
                      >
                        <i className={`fas fa-arrow-down`} />
                        Move Down
                      </Button>
                    )}
                    <Button
                      variant="danger"
                      onClick={() => this.deleteQuestion(index)}
                      type="button"
                    >
                      Delete
                    </Button>
                  </div>
                </Container>
              );
            })}

            <div>
              <Button variant="cta" onClick={this.addQuestion} type="button">
                Add New Question/Answer Pair
              </Button>
            </div>

            <Button variant="cta" onClick={this.saveData} type="button">
              Save How It Works
            </Button>
          </Form>
        )}
        <h2>{this.state.message}</h2>
      </React.Fragment>
    );
  }
}

export default withFirebase(EditHowItWorksPage);
