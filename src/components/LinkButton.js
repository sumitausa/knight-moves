import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const LinkButton = props => {
  return (
    <a className={`btn ${props.className}`} href={props.href}>
      {props.children}
    </a>
  );
};

LinkButton.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired
};

export default LinkButton;
