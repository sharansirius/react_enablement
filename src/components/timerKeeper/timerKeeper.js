import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Time, Timer } from "../";
import "./timerKeeper.scss";

const TimeKeeper = React.memo(({ init }) => {
  console.log("On TimeKeeper Init");
  const [time, setTime] = useState(init);
  const onTimeRefresh = useCallback((newTime) => {
    setTime(newTime);
  },[time]);

  return (
    <>
      <Timer interval={60000} onTimeChange={onTimeRefresh}></Timer>
      <ul>
        <li>
          <Time title="SESSION TIME" init={init} type="session" current={time} />
        </li>
        <li>
          <Time current={time} type="EST" />
        </li>
        <li>
          <Time current={time} type="IST" />
        </li>
      </ul>
    </>
  );
});

TimeKeeper.propTypes = {
  init: PropTypes.object,
};

export default TimeKeeper;
