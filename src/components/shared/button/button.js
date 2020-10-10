import React from 'react'; 
import "./button.module.scss";

const Button = (props) => {
    const label = props.label;
    return (
        <button type="submit">{label||'Button'}</button>
    );
}

export default Button;