import React from 'react'; 
import "./header.scss";

const Header = () => {

    return (
        <div className="header component-wrapper">  
            <div className='imageWrapper'>
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