import React from 'react';
import "./home.scss";
import { Destinations, Promo, Contact} from "../../components";

const Home = () => {

    return (
        <>
            <Promo />
            <Destinations />
            <Contact />
        </>
    );
}

export default Home;