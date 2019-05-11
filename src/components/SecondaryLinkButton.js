import React from "react";
import PropTypes from "prop-types";
import LinkButton from "./LinkButton";
import "./SecondaryButton.css";

const CallToActLinkButton = props => {
  return (
    <LinkButton
      className={`btn-secondary ${props.className}`}
      href={`${props.href}`}
    >
      {props.children}
    </LinkButton>
  );
};

CallToActLinkButton.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired
};

export default CallToActLinkButton;
