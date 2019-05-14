import React from 'react';

const Story = props => {
  return (
    <div className="container">
      <h1 className="display-4">Our Story</h1>
      <div className="text-justify">
        {Object.keys(props.story).map(para => {
          return <p key={para}>{props.story[para]}</p>;
        })}
      </div>
    </div>
  );
};

export default Story;
