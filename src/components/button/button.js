import React from "react";
import "./button.scss";
import PropTypes from "prop-types";

function Button({ onClick, type, selector = "", children }) {
  console.log("On Button Init");
  return (
    <button className={selector} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  selector: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
