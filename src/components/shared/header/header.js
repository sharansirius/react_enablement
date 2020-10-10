import React from 'react'; 
import Styles from "./header.module.scss";
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <div className={Styles.header}>  
            <div className={Styles.imageWrapper}>
                <img src={process.env.PUBLIC_URL+'/img/logo.png'} alt="logo"/>
            </div> 
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/Hotels" >Hotels</Link></li>
                <li><Link to="/BikeRentals" >BikeRentals</Link></li>
                <li><Link to="/Restaurants" >Restaurants</Link></li>
            </ul>
        </div>
    );
}

export default Header;