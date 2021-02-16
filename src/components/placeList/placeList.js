import React from "react";
import PropTypes from "prop-types";
import { Place } from "../";
import { v4 as uuidv4 } from 'uuid';
import "./placeList.scss";

const PlaceList = ({ data }) => {
  console.log("On PlaceList Init");
  return (
    <div className="list_wrapper">
      { 
        (data)? data.map((item) => (
          <Place key={uuidv4()} {...item} />
        )): <div>No data found</div>
      }
    </div>
  );
};

PlaceList.propTypes = {
  data: PropTypes.array,
};

export default PlaceList;
