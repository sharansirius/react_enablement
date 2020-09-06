import React from 'react'; 
import logo from './logo.png';
import "./header.scss";

const Header = () => {

    return (
        <div className="wrapper">  
            <div className='imageWrapper'>
                <img src={logo} alt="logo"/>
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