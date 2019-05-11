import React from 'react';
import IconLinkButton from './IconLinkButton';

const SocialMediaBar = props => {
  const sites = Object.entries(props.data);

  console.log('sites', sites);

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

export default SocialMediaBar;
