import React from 'react';
import PropTypes from 'prop-types';
import IconLinkButton from './IconLinkButton';

const SocialMediaBar = props => {
  const sites = Object.entries(props.data);

  return (
    <span>
      {sites.map(site => {
        return (
          <IconLinkButton
            key={site[0]}
            className={`${props.className}`}
            href={site[1]}
            icon={site[0]}
          />
        );
      })}
    </span>
  );
};

SocialMediaBar.propTypes = {
  className: PropTypes.string,
  data: PropTypes.objectOf(PropTypes.string).isRequired
};

SocialMediaBar.defaultProps = {
  className: ''
};

export default SocialMediaBar;
