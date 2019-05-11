import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const ActionButton = props => {
  return (
    <button
      className={`btn ${props.className}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

ActionButton.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node
};

ActionButton.defaultProps = {
  type: "submit",
  className: "",
  disabled: false,
  children: ""
};

export default ActionButton;
