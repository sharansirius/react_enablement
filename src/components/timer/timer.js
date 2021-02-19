import React, { useEffect } from "react";
import "./timer.scss";
import PropTypes from "prop-types";

const Timer = React.memo(({ interval, onTimeChange }) => {
  console.log("On timer init");
  useEffect(() => {
    let myInterval = setInterval(() => {
      let newDate = new Date();
      onTimeChange(newDate);
    }, interval);
    return () => {
      clearInterval(myInterval);
    };
  }, []);
  return <></>;
})

Timer.propTypes = {
    interval: PropTypes.number, 
    onTimeChange: PropTypes.func
};

export default Timer;
