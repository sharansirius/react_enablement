import React from "react";
import PropTypes from "prop-types";
import "./input.scss";

function Input({
  type,
  placeholder,
  value,
  autofocus = false,
  onChange,
  specialClass = "",
  name,
  checked
}) {
  console.log("On Input Init");
  return (
    <input
      placeholder={placeholder}
      value={value}
      autoFocus={autofocus}
      type={type}
      name={name}
      className={specialClass ? specialClass + " input" : "input"}
      onChange={onChange}
      checked={checked}
    />
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  autofocus: PropTypes.bool,
  type: PropTypes.string,
  onChange: PropTypes.func,
  specialClass: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool
};

export default Input;
