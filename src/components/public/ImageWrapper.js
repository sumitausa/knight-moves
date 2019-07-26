import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";
import "./ImageWrapper.css";

const ImageWrapper = props => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <Image
        className={`img-thumbnail image-wrapper ${props.className}`}
        src={props.src}
        alt={props.alt}
      />
    </div>
  );
};

ImageWrapper.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

ImageWrapper.defaultProps = {
  className: ""
};

export default ImageWrapper;
