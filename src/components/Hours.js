import React from "react";
import PropTypes from "prop-types";

const Hours = props => {
  return (
    <div className="container text-left">
      <h1 className="display-4">Hours</h1>
      <p>
        Monday: <br className="d-sm-none d-md-block d-lg-none" />
        {props.hours.monday}
      </p>
      <p>
        Tuesday: <br className="d-sm-none d-md-block d-lg-none" />
        {props.hours.tuesday}
      </p>
      <p>
        Wednesday: <br className="d-sm-none d-md-block d-lg-none" />
        {props.hours.wednesday}
      </p>
      <p>
        Thursday: <br className="d-sm-none d-md-block d-lg-none" />
        {props.hours.thursday}
      </p>
      <p>
        Friday: <br className="d-sm-none d-md-block d-lg-none" />
        {props.hours.friday}
      </p>
      <p>
        Saturday: <br className="d-sm-none d-md-block d-lg-none" />
        {props.hours.saturday}
      </p>
      <p>
        Sunday: <br className="d-sm-none d-md-block d-lg-none" />
        {props.hours.sunday}
      </p>
    </div>
  );
};

Hours.propTypes = {
  hours: PropTypes.shape({
    monday: PropTypes.string.isRequired,
    tuesday: PropTypes.string.isRequired,
    wednesday: PropTypes.string.isRequired,
    thursday: PropTypes.string.isRequired,
    friday: PropTypes.string.isRequired,
    saturday: PropTypes.string.isRequired,
    sunday: PropTypes.string.isRequired
  })
};

export default Hours;
