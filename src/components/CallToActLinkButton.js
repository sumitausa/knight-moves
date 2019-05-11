import React from "react";
import PropTypes from "prop-types";
import LinkButton from "./LinkButton";
import "./CallToActButton.css";

const CallToActLinkButton = props => {
  return (
    <LinkButton className={`btn-cta ${props.className}`} href={props.href}>
      {props.children}
    </LinkButton>
  );
};

CallToActLinkButton.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node
};

CallToActLinkButton.defaultProps = {
  className: "",
  children: ""
};

export default CallToActLinkButton;
