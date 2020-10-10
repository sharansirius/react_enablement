import React from 'react';
import "./home.module.scss";
import { List, Promo, Contact} from "../../components";

const Home = () => {

    return (
        <>
            <Promo />
            <List />
            <Contact />
        </>
    );
}

export default Home;