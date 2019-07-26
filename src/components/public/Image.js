import React from "react";
import PropTypes from "prop-types";

const Image = props => {
  return (
    <img
      className={`img-fluid ${props.className}`}
      src={props.src}
      alt={props.alt}
    />
  );
};

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

Image.defaultProps = {
  className: ""
};

export default Image;
