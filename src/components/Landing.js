import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Landing = () => {
  return (
    <Jumbotron fluid id="leadJumbo" className="paral paralsec-landing">
      <Container>
        <div className="row">
          <Container className="col-sm-12 align-self-center">
            <div>
              <h1 className="display-4">Knight Moves Cafe</h1>
              <p className="lead">
                Thousands of Games | Two Cafes | One Community
              </p>
            </div>
            <Button
              variant="cta"
              className="btn-lg"
              href="/brookline"
              style={{ marginRight: '10px' }}
            >
              Brookline
            </Button>
            <Button
              variant="cta"
              className="btn-lg"
              href="/somerville"
              style={{ marginLeft: '10px' }}
            >
              Somerville
            </Button>
          </Container>
        </div>
      </Container>
    </Jumbotron>
  );
};

export default Landing;
