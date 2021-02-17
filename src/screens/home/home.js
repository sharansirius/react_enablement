import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import logger from "../../utils/logger";
import "./home.scss";
import { AvailableFlights, BookNow, Header, Promotions, Search, PlanTrip } from "../../components";
import { GlobalPromotions } from "../../containers";
import UserContext from "../../context/userContext";

export const Home = React.memo(({ location }) => {
  logger.config.enableLogger();
  console.log("On Home Init");
  const [source, setSource] = useState();
  const [destination, setDestination] = useState();
  const [city, setCity] = useState();
  const [selectedFlight, setSelectedFlight] = useState({});
  const [showFlights, setShowFlights] = useState(false);

  const planTrip = useCallback(() => {setShowFlights(true)},[showFlights])

  const onSourceChange = useCallback((event) => {
    setSource(event.target.value);
    setShowFlights(false);
    setSelectedFlight({})
  },[source])

  const onDestinationChange = useCallback((event) => {
    setCity(event.target.value);
    setDestination(event.target.value);
    setShowFlights(false);
    setSelectedFlight({})
  },[destination])  

  const searchForPlace = (event) => {
    if((event.which || event.keyCode) === 13) setCity(event.target.value);
  }

  const onBook = (fightDetails) => {
    setSelectedFlight(fightDetails);
  }

  return (
    <UserContext.Provider value={location.data}>
      <Header></Header>
      <div className="content_wrapper">
        <div className="left">
          <Search  onkeypress={searchForPlace}></Search>
          <Promotions city={city}></Promotions>
          <GlobalPromotions></GlobalPromotions>
        </div>
        <div className="right">
          <PlanTrip onSubmit={planTrip}
                    onSourceChange={onSourceChange} 
                    onDestinationChange={onDestinationChange}></PlanTrip>
          {
            (showFlights)?
              <>
                <AvailableFlights source={source} destination={destination} onBook={onBook}></AvailableFlights>
                <BookNow flightInfo={selectedFlight}></BookNow>
              </>
              :''
          }
        </div>
      </div>
    </UserContext.Provider>
  );
});

Home.propTypes = {
  location: PropTypes.object
};
