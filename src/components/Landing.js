import React from "react";
import CallToActLinkButton from "./CallToActLinkButton";

const Landing = () => {
  return (
    <div
      id="leadJumbo"
      className="jumbotron jumbotron-fluid paral paralsec-landing"
    >
      <div className="container">
        <div className="row">
          <div className="container col-sm-12 col-md-10 align-self-center">
            <div>
              <h1 className="display-4">Knight Moves Cafe</h1>
              <p className="lead">
                Thousands of Games | Two Cafes | One Community
              </p>
            </div>
            <CallToActLinkButton className="btn-lg" href="/brookline">
              Brookline
            </CallToActLinkButton>
            <CallToActLinkButton className="btn-lg" href="/somerville">
              Somerville
            </CallToActLinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
