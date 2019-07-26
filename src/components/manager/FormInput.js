import React from "react";
import PropTypes from "prop-types";

const FormInput = props => {
  return (
    <div className="form-group">
      <input
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className={`form-control ${props.className}`}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string
};

FormInput.defaultProps = {
  className: "",
  type: "text",
  placeholder: "Your Text Here"
};

export default FormInput;
