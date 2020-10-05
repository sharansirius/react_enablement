import React from 'react'; 
import Styles from "./header.module.scss";

const Header = () => {

    return (
        <div className={Styles.header}>  
            <div className={Styles.imageWrapper}>
                <img src={process.env.PUBLIC_URL+'/img/logo.png'} alt="logo"/>
            </div>    
            <ul>
                <li><a href="#hotels">Hotels</a></li>
                <li><a href="#bikeRentals">Bike Rentals</a></li>
                <li><a href="#restaurants">Restaurants</a></li>
            </ul>
        </div>
    );
}

export default Header;