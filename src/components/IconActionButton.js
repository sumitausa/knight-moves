import React from "react";
import PropTypes from "prop-types";
import CallToActActionButton from "./CallToActActionButton";

const IconActionButton = props => {
  return (
    <CallToActActionButton
      className={`${props.className}`}
      onClick={props.onClick}
      type={props.type}
    >
      <i className={`fas fa-${props.icon}`} />
    </CallToActActionButton>
  );
};

IconActionButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  icon: PropTypes.string.isRequired
};

IconActionButton.defaultProps = {
  className: "",
  type: "submit"
};

export default IconActionButton;
