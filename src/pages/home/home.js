import React, { useEffect, useState } from 'react';
import "./home.module.scss";
import { List, Promo, Contact } from "../../components";
import { destinationService as _service } from "../../services/_destinations";
import { CONSTANTS } from "../../constants/constants"

const Home = () => {
    console.log("1. Hello I am getting rendered");
    const [destinationList, setDestinationList] = useState(() => {
        console.log('2. State set');
        return [];
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

    return (
        <>
            <Promo />
            <List items={destinationList} 
                  type={CONSTANTS.LIST_TYPE_DESTINATION}
                  heading="Destinations"
                  subHeading="Just for you, Because you and your bike are special to us."/>
            <Contact />
        </>
    );
}

export default Home;