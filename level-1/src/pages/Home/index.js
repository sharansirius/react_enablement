import React from 'react';
import "./home.scss";
import { Destinations, Promo, Header, Contact, Footer} from "../../components";

const Home = () => {

    return (
        <>
            <Header />
            <Promo />
            <Destinations />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;