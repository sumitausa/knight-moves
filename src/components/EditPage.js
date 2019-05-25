import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import EditContactPage from './EditContactPage';
import EditHoursPage from './EditHoursPage';
import EditHowItWorksPage from './EditHowItWorksPage';
import EditMenuPage from './EditMenuPage';
import EditSocialLinksPage from './EditSocialLinksPage';
import EditStoryPage from './EditStoryPage';
import * as CONSTANTS from './Constants';

import { withFirebase } from './Firebase';

class EditPage extends React.Component {
  state = {
    cafeData: {},
    isLoading: true,
    errMessage: null,
    selected: null
  };

  componentDidMount() {
    switch (this.props.cafe) {
      case CONSTANTS.BROOKLINE:
        this.loadBrooklineData();
        break;
      case CONSTANTS.SOMERVILLE:
        this.loadSomervilleData();
        break;
      default:
        this.setState({
          errMessage:
            'Something is very wrong with the edit page. Contact Tyrel ASAP.'
        });
    }
  }

  loadBrooklineData = () => {
    this.props.firebase.brookline().on('value', snapshot => {
      const cafeObj = snapshot.val();

      this.setState({
        cafeData: cafeObj,
        isLoading: false
      });
    });
  };

  loadSomervilleData = () => {
    this.props.firebase.somerville().on('value', snapshot => {
      const cafeObj = snapshot.val();

      this.setState({
        cafeData: cafeObj,
        isLoading: false
      });
    });
  };

  handleSelect = eventKey => {
    this.setState({
      selected: eventKey
    });
  };

  saveBrooklineData = () => {
    this.props.firebase.brookline().set({
      brookline: this.state.cafeData
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <span>Loading...</span>
        ) : (
          <div>
            {this.state.errMessage ? (
              <h1>{this.state.errMessage}</h1>
            ) : (
              <div>
                <DropdownButton
                  variant="cta"
                  title={
                    this.state.selected ? this.state.selected : 'Select One'
                  }
                  id="basic-nav-dropdown"
                  onSelect={this.handleSelect}
                >
                  {Object.keys(this.state.cafeData).map(key => {
                    const normalized = key
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, function(str) {
                        return str.toUpperCase();
                      });

                    return (
                      <Dropdown.Item key={key} eventKey={normalized}>
                        {normalized}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>

                {this.state.selected === CONSTANTS.CAFE_CONTACT && (
                  <EditContactPage cafe={this.props.cafe} />
                )}

                {this.state.selected === CONSTANTS.CAFE_HOURS && (
                  <EditHoursPage cafe={this.props.cafe} />
                )}

                {this.state.selected === CONSTANTS.CAFE_HOW_IT_WORKS && (
                  <EditHowItWorksPage cafe={this.props.cafe} />
                )}

                {this.state.selected === CONSTANTS.CAFE_MENU && (
                  <EditMenuPage cafe={this.props.cafe} />
                )}

                {this.state.selected === CONSTANTS.CAFE_SOCIAL_LINKS && (
                  <EditSocialLinksPage cafe={this.props.cafe} />
                )}

                {this.state.selected === CONSTANTS.CAFE_STORY && (
                  <EditStoryPage cafe={this.props.cafe} />
                )}
              </div>
            )}
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default withFirebase(EditPage);
