import React from "react";
import PropTypes from "prop-types";
import { Input } from "../";
import { v4 as uuidv4 } from 'uuid';
import "./radioGroup.scss";

export const RadioGroup = React.memo(({ buttons, name, onItemSelected }) => {
  console.log("On RadioGroup Init");
  return (
    <div className="radio_group">
      {buttons.map((item,index) => (
        <div key={uuidv4()} className="radio_item">
          <Input
            type="radio"
            name={name}
            value={item.value}
            onChange={onItemSelected}
            checked={index===0?true:false}
          />
          <label htmlFor={name}>{item.label}</label>
        </div>
      ))}
    </div>
  );
});

RadioGroup.propTypes = {
  buttons: PropTypes.array,
  name: PropTypes.string,
  onClick: PropTypes.func,
};
