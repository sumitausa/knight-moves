import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css';

const MenuItem = props => {
  return (
    <div className="container col-sm-6 col-md-4">
      <div className="menuItem p-2 m-1">
        <p enzymeId="menu.item.nameAndPrice" className="font-weight-bold">
          {props.item.name}
          <span enzymeId="menu.item.price" className="float-right">
            ${props.item.price}
          </span>
        </p>
        <p enzymeId="menu.item.description" className="font-weight-light">
          {props.item.description}
        </p>
      </div>
    </div>
  );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.string
  }).isRequired
};

export default MenuItem;
