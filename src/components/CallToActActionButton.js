import React from "react";
import ActionButton from "./ActionButton";
import PropTypes from "prop-types";
import "./CallToActButton.css";

const CallToActActionButton = props => {
  return (
    <ActionButton
      className={`btn-cta ${props.className}`}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
    >
      {props.children}
    </ActionButton>
  );
};

CallToActActionButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node
};

CallToActActionButton.defaultProps = {
  className: "",
  disabled: false,
  children: "",
  type: "submit"
};

export default CallToActActionButton;
