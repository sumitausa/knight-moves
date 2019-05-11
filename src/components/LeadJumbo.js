import React from "react";

const LeadJumbo = props => {
  return (
    <div
      id="leadJumbo"
      className="jumbotron jumbotron-fluid paral paralsec-main"
    >
      <div className="container">
        <div className="row">
          <div className="container col-sm-12 col-md-12 align-self-center">
            <div>
              <h1 className="display-4">
                Knight Moves Cafe {props.cafeLocation}
              </h1>
              <p className="lead">
                Thousands of Games | Two Cafes | One Community
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadJumbo;