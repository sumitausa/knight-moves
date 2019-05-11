import React from "react";
import PropTypes from "prop-types";
import Image from "./Image";

const LinkImage = props => {
  return (
    <a href={props.href}>
      <Image className={props.className} src={props.src} alt={props.alt} />
    </a>
  );
};

LinkImage.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

LinkImage.defaultProps = {
  className: ""
};

export default LinkImage;
