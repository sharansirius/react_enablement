import React from 'react';
import "./home.scss";
import { Header, Footer } from "../../shared";
import { Destinations } from "../../components";

const Home = () => {

    return (
        <>
            <Header />
            <Destinations />
            <Footer />
        </>
    );
}

export default Home;