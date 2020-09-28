import React from 'react'; 
import "./button.scss";

const Button = (props) => {
    const btn_label = props.btn_label;
    return (
        <button type="submit">{btn_label||'Button'}</button>
    );
}

export default Button;