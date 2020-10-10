import React, { useEffect, useState } from 'react';
import Style from './list.module.scss';
import { destinationService as _service } from "../../../services/_destinations";
import { Destination } from "../..";

function List() {
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
    _service.fetchAllDestinations().then((res) => {
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
                <Destination
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  location={item.location}
                  description={item.description}></Destination>
              ))
            }
          </div>
        </div>
      </>
    ) : <h2 className={Style.noDestinations}> No Destination available !!</h2>;
}

export default List;
