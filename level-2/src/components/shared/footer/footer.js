import React from 'react'; 
import Styles from "./footer.module.scss";

const Footer = (props) => {
    return (
        <div className={Styles.footer}>   
           <p className={Styles.textCenter}>© Sirius computer solutions</p>
        </div>
    );
}

export default Footer;