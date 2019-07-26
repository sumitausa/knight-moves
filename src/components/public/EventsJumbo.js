import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const EventsJumbo = () => {
  return (
    <React.Fragment>
      <Jumbotron fluid id="events" className="paral paralsec-text">
        <div>
          <div className="row">
            <div className="container col-md-8">
              <h1 className="display-4">Announcements and Upcoming Events!</h1>
              <div>
                <table className="content-align-center">
                  <tbody>
                    <tr>
                      <td>Dominion Tournament</td>
                      <td>March 15th</td>
                    </tr>
                    <tr>
                      <td>Board Games and Beer</td>
                      <td>March 17th</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Jumbotron>
    </React.Fragment>
  );
};

export default EventsJumbo;
