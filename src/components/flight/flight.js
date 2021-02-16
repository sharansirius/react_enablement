import React from "react";
import PropTypes from "prop-types";
import "./flight.scss";
import { Button } from "../";

const flight = ({ item, onBook }) => {
  console.log("On Flight Init");
  return (
    <div className="flight_wrapper">
      <div>
        <p className="date">{item.date}</p>
        <p className="from_to">
          {item.source} - {item.dest}
        </p>
        <p className="price">${item.price}</p>
      </div>
      <Button onClick={()=>onBook(item)}>Book</Button>
    </div>
  );
};

flight.propTypes = {
  item: PropTypes.object,
};

export default flight;
