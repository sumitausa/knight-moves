import React from 'react';
import MenuItem from './MenuItem';

const MenuGroup = props => {
  return (
    <div className="container">
      <h2>{props.groupName}</h2>
      <div className="row m-5">
        {Object.keys(props.products).map(item => {
          console.log('mgroup item:', item);
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

export default MenuGroup;
