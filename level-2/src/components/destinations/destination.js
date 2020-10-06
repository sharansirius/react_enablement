import React, { useEffect, useState } from 'react';
import Style from './destination.module.scss';
import PropTypes from 'prop-types';
import { destinationService } from "../../services/destinations";
import { Button } from "..";

function Destinations() {
  console.log("1. Hello I am getting rendered");
  const [destinationList, setDestinationList] = useState(() => {
    console.log('2. State set');
    return null;
  });

  useEffect(() => {
    /* Resolve at the level of page
      1. Containers
      2. Render Props */
    console.log('3. Use effect');
    destinationService.fetchAllDestinations().then((res) => {
      setDestinationList(res);
    });
  }, []);

  return (destinationList) ? 
    (
      <>
        <div className={Style.contentWrapper}>
          <h1>Destinations</h1>
          <p>Just for you, Because you and your bike are special to us.</p>
          <div className={Style.destinationList}>
            {
              destinationList.map(item => (
                <div key={item.id} className={Style.item}>
                  <img src={process.env.PUBLIC_URL + '/img/' + item.image} alt="place" />
                  <h4>{item.title}</h4>
                  <p>{item.location}</p>
                  <p>{item.description}</p>
                  <Button label="Read More"></Button>
                </div>
              ))
            }
          </div>
        </div>
      </>
    ) : (<h2 className={Style.noDestinations}> No Destination available !!</h2>);
}

Destinations.prototypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string
}

export default Destinations;
