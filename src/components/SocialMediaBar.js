import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const SocialMediaBar = props => {
  const sites = Object.entries(props.data);

  return (
    <span>
      {sites.map(site => {
        return (
          <Button
            variant="cta"
            key={site[0]}
            className={`${props.className}`}
            style={{ margin: '8px' }}
            href={site[1]}
          >
            <i className={`fab fa-${site[0]}`} />
          </Button>
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
