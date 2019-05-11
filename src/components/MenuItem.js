import React from 'react';
import './MenuItem.css';

const MenuItem = props => {
  return (
    <div className="container col-sm-6 col-md-4">
      <div className="menuItem p-2 m-1">
        <p className="font-weight-bold">
          {props.item}
          <span className="float-right">${props.price}</span>
        </p>
        <p className="font-weight-light">{props.description}</p>
      </div>
    </div>
  );
};

export default MenuItem;
