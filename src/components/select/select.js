import React from "react";
import PropTypes from "prop-types";
import "./select.scss";

const Select = ({ options, selector, onChange, label }) => {
  console.log("On Select Init");
  return (
    <div>
      <label htmlFor={selector}>{label}</label>
      <select name={selector} id={selector} onChange={onChange}>
        {options.map((option) => (
          <option key={option.id} 
                  value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  selector: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string
};

export default Select;
