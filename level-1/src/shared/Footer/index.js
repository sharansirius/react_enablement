import React from 'react'; 
import "./footer.scss";

const Footer = (props) => {
    const { footerDisplayText, justAnotherPropF } = props;
    return (
        <div className="wrapper">   
           <h1 className="heading">{footerDisplayText}</h1> {justAnotherPropF}
        </div>
    );
}

export default Footer;