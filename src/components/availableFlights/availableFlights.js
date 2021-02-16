import React, { useEffect, useState } from "react";
import * as _services from "../../services/FlightService";
import { Flights } from "../";
import PropTypes from "prop-types";
import "./availableFlights.scss";

export const AvailableFlights = React.memo(({ source, destination, onBook }) => {
  console.log("On AvailableFlights Init");
  const [flightData, setFlightData] = useState([]);
  useEffect(() => {
    if (source && destination) {
      _services.getFlights(source, destination).then((res) => {
        setFlightData(res.data);
      });
    }
  }, [source, destination]);
  return (
    (source && destination) ? 
      (flightData && flightData.length>0) ?
        <div className="component_wrapper availablefight_wrapper">
          <h3 className="card_heading"> Available Flights </h3>
          <Flights data={flightData} onBook={onBook}/>
        </div> : <h6 className="component_wrapper availablefight_wrapper">No flights available between {source} and {destination}</h6>
      : ''
  );
});

AvailableFlights.propTypes = {
  sour: PropTypes.string,
  destination: PropTypes.string,
};
