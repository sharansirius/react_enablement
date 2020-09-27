import React, { useEffect, useState } from 'react';
import './destination.scss';
import PropTypes from 'prop-types';
import { destinationService } from "../../services/destinations";

function Destinations() {
  console.log("1. Hello I am getting rendered");
  const [destinationList, setDestinationList] = useState(() => {
    console.log('2. State set');
    return null;
  });

  useEffect(() => {
    console.log('3. Use effect');
    destinationService.fetchAllDestinations().then((res) => {
      setDestinationList(res);
    });
  },[]);

  if (destinationList) {
    console.log("5. Render ended");
    return (
      <>
        <div className="component-wrapper">
          <h1>Destinations</h1>
          <div className="destinationList">
            {
              destinationList.map(item => (
                <div key={item.id} className="item">
                  <img src={process.env.PUBLIC_URL + '/img/' + item.image} alt="place" />
                  <h4>{item.title}</h4>
                  <p>{item.location}</p>
                  <p>{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
      </>
    );
  }
  console.log("5. Render ended - Empty");
  return <h2 className="no-destinations"> No Destination available !!</h2>;
}

Destinations.prototypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string
}

export default Destinations;
