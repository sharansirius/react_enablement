import React from "react";
import PropTypes from "prop-types";
import "./form.scss";

export const Form = React.memo(({ selector='', onFormSubmit, children }) => {
  console.log("On Form Init");
  return <form className={selector} onSubmit={(e)=>{e.preventDefault(); return onFormSubmit(e)}}>{children}</form>;
});

Form.propTypes = {
  onFormSubmit: PropTypes.func,
  children: PropTypes.any,
};

