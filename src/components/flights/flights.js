import React from "react";
import PropTypes from "prop-types";
import "./flights.scss";
import { v4 as uuidv4 } from 'uuid';
import { Flight } from "../";

const Flights = ({ data, onBook }) => {
  console.log("On Flights Init");
  return (
    <>
      {data.map( item => <Flight key={uuidv4()} item={item} onBook={onBook} /> )}
    </>
  );
};

Flights.propTypes = {
  data: PropTypes.array,
};

export default Flights;
