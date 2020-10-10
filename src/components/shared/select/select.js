import React from 'react';
import Styles from "./select.module.scss";
import PropTypes from 'prop-types';

const Select = (props) => {
  const { label, labelType, name, options, value, onChange } = props;

  const onSelectChange = (event)=> onChange(event.target.value);

  return (options && options.length > 0) ? (
    <div className={Styles.formField}>
      <label className={labelType||''} htmlFor={name}>{label}</label>
      <select name={name} 
              className={Styles.list} 
              value={value}
              onChange={onSelectChange}>
        {
          options.map(option => (
            <option key={option.id} value={option.value}>{option.value}</option>
          ))
        }
      </select>
    </div>
  ) : '';
}

Select.prototypes = {
  label: PropTypes.string,
  labelType: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Select;
