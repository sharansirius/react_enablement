import React, { useState, useEffect } from 'react';
import Style from "./locationinsight.module.scss";
import { destinationService as _service } from "../../services/_destinations";

const LocationInsight = (props) => {
    let parms = props.location.state;
    let [details, setDetails] = useState(() => {
        return null;
    });
    let [similarPlaces, setSimilarPlaces] = useState(() => {
        return null;
    });
    let [temp, setTemp] = useState(() => {
        return null;
    });
    
    console.log(similarPlaces);
    useEffect(() => {
        _service.getDetails(parms.id).then((res) => {
            if(res && res.length>0){
                setDetails(res[0]);
            }
        });
        _service.getSimilarPlaces(parms.id).then((res) => {
            if(res && res.length>0){
                setSimilarPlaces(res);
            }
        }); 
        _service.getWeather(parms.id).then((res) => {
            if(res && res.length>0){
                if(res && res.main && res.main.temp){
                    let temprature =  (res.main.temp - 273.15);
                    setTemp(temprature);
                }
            }
        });      
    }, [parms])

    return (details) ? (
        <div className={Style.detailsWrapper}>  
            <div className={Style.insights}>
                <div className={Style.placeDetails}>
                    <h1>{details.location}</h1>
                    <h4>{details.title}</h4>
                    <p className={Style.temperature}>{temp}</p>
                </div>
                <img className={Style.placeImage} src={process.env.PUBLIC_URL + '/img/' + details.image} alt="place" />
            </div>
            <p>{details.description}</p>
            <p>{details.description}</p>
            <p>{details.description}</p>
            <p>{details.description}</p>  
        </div>
    ): <h1 className="text-center">No Data</h1>;
}

export default LocationInsight;