import React from 'react';

const HowItWorks = props => {
  return (
    <div className="col-12 text-left">
      <h1 className="display-4">How it Works</h1>
      <p>{props.data.lead}</p>
      {Object.keys(props.data.qaPairs).map(key => {
        return (
          <React.Fragment key={key}>
            <h3>{props.data.qaPairs[key].question}</h3>
            <p>{props.data.qaPairs[key].answer}</p>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default HowItWorks;
