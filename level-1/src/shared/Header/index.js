import React from 'react'; 
import "./header.scss";

const Header = (props) => {
    const { headerDisplayText, justAnotherPropH } = props;
    return (
        <div className="wrapper">   
           <h1 className="heading">{headerDisplayText}</h1> {justAnotherPropH}
        </div>
    );
}

export default Header;