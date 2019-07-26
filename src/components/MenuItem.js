import React from 'react';
import PropTypes from 'prop-types';
import './MenuItem.css';

const MenuItem = props => {
  return (
    <div className="container col-sm-6 col-md-4">
      <div className="menuItem p-2 m-1">
        <p className="font-weight-bold">
          {props.item.name}
          <span className="float-right">${props.item.price}</span>
        </p>
        <p className="font-weight-light">{props.item.description}</p>
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
