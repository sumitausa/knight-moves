import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const MenuGroup = props => {
  return (
    <div className="container">
      <h2>{props.groupName}</h2>
      <div className="row m-5">
        {Object.keys(props.products).map(item => {
          return (
            <MenuItem
              key={item}
              item={item}
              price={props.products[item].price}
              description={props.products[item].description}
            />
          );
        })}
      </div>
    </div>
  );
};

MenuGroup.propTypes = {
  products: PropTypes.objectOf(PropTypes.object).isRequired
};

export default MenuGroup;
