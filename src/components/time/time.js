import React, { useEffect, useState } from "react";
import "./time.scss";
import * as _services from "../../services/TimeZoneService";
import PropTypes from "prop-types";

const Time = (props) => {
  const [title, setTitle] = useState();
  const [time, setTime] = useState();
  console.log("On Time Init", props.type, title, time);
  useEffect(() => {
    _services.getTimeAndDate(props).then((res) => {
      setTime(res.title);
      setTitle(res.time);
    },(err) => {
        console.log(err);
    });
  });

  return (
    <div className="time">
      <p> {time} </p>
      <h1> {title} </h1>
    </div>
  );
};

Time.propTypes = {
  init: PropTypes.instanceOf(Date), 
  current: PropTypes.instanceOf(Date), 
  type: PropTypes.string, 
  title: PropTypes.string 
};

export default Time;
