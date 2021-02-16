import React from "react";
import PropTypes from "prop-types";
import "./place.scss";

const Place = ({ landmark, location, photo }) => {
  console.log("On Place Init");
  return (
    <div className="place">
      <img src={photo} alt={landmark||location} />
      <h5>{landmark}</h5>
      <p>{location}</p>
    </div>
  );
};

Place.propTypes = {
  landmark: PropTypes.string,
  location: PropTypes.string,
  photo: PropTypes.string,
};

export default Place;
