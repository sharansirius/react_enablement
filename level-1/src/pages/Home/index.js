import React from 'react'; 
import "./home.scss";
import { Header, Footer } from "../../shared";
import { destinationService } from "../../services/destinations";

const Home = () => {
    destinationService.fetchAllDestinations()
        .then((res)=>{
            console.log("####", res);
        });

    return (
        <>
            <Header />
            <h1>Hello World !!!!</h1>
            <Footer />
        </>
    );
}

export default Home;