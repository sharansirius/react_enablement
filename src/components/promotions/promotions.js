import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as _services from "../../services/TourismService";
import { PlaceList } from "../";
import "./promotions.scss";

export const Promotions = React.memo(({ city }) => {
    console.log("On Promotions Init");
    const [places, setPlaces] = useState();
    const [currentCity, setCurrentCity] = useState();
    useEffect(() => {
        if(city) {
            _services.getTouristSpots(city).then((res) => {
                setPlaces(res.data);
            });
            _services.getCityInformation(city).then((res) => {
                setCurrentCity(res.data)
            });
        }
    },[city]);
    return (
        <>
            {
                (city) ? 
                    ((places && places.length>0)||(currentCity && Object.keys(currentCity).length>0)) ?
                    <div className="component_wrapper promotions_wrapper">
                        <h3 className="card_heading">Travelling to {currentCity?.name}? Know more about it.</h3>
                        <h2>{currentCity?.weather}</h2> 
                        <p>{currentCity?.description}</p>
                        <PlaceList data={places} />
                    </div>
                    : <h3 className="component_wrapper promotions_wrapper">We don’t currently service this city</h3>
                : ''
            }
        </>
    );
});

Promotions.propTypes = {
  city: PropTypes.string,
};

