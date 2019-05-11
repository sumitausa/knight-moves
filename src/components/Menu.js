import React from 'react';
import PropTypes from 'prop-types';
import MenuGroup from './MenuGroup';

const Menu = props => {
  return (
    <React.Fragment>
      <div id="menu" className="jumbotron jumbotron-fluid paral paralsec-text">
        <div>
          <div className="row">
            <div className="container">
              <h1 className="display-4">Our Menu</h1>
              {Object.keys(props.menu).map(key => {
                return (
                  <MenuGroup
                    key={key}
                    groupName={key}
                    products={props.menu[key]}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Menu.propTypes = {
  menu: PropTypes.objectOf(PropTypes.object).isRequired
};

export default Menu;
