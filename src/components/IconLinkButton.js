import React from "react";
import PropTypes from "prop-types";
import CallToActLinkButton from "./CallToActLinkButton";

const IconLinkButton = props => {
  return (
    <CallToActLinkButton
      className={`btn-sm ${props.className}`}
      onClick={props.onClick}
      href={props.href}
    >
      <i className={`fab fa-${props.icon}`} />
    </CallToActLinkButton>
  );
};

IconLinkButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

IconLinkButton.defaultProps = {
  className: ""
};

export default IconLinkButton;
