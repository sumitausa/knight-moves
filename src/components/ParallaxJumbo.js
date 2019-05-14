import React from 'react';
import PropTypes from 'prop-types';

const ParallaxJumbo = props => {
  return (
    <div
      className="paral jumbotron jumbotron-fluid"
      style={{
        backgroundImage: `url(${props.img})`,
        minHeight: `${props.height}px`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    />
  );
};

ParallaxJumbo.propTypes = {
  img: PropTypes.string.isRequired,
  height: PropTypes.number
};

ParallaxJumbo.defaultProps = {
  height: 200
};

export default ParallaxJumbo;
