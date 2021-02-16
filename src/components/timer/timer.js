import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Time } from "../../components";
import "./timer.scss"

const Timer = ({ init }) => {
  console.log("On Timer Init");
  const [time, setTime] = useState(init);

  useEffect(() => {
    let myInterval = setInterval(() => {
      setTime(new Date());
    }, 60000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <ul>
      <li>
        <Time init={init} session={true} current={time} />
      </li>
      <li>
        <Time current={time} type="EST" />
      </li>
      <li>
        <Time current={time} type="IST" />
      </li>
    </ul>
  );
};

Timer.propTypes = {
    init: PropTypes.object
};

export default Timer;
