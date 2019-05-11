import React from 'react';
import MenuGroup from './MenuGroup';

const Menu = props => {
  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid paral paralsec2" />
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

export default Menu;
