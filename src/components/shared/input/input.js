import React from 'react';
import Styles from './input.module.scss';
import PropTypes from 'prop-types';

const Input = (props)=>{
    const { label, name, value, type, onChange } = props;
    const onInputChange = (event)=> onChange(event.target.value);
    return (
        <div className={Styles.formField}>
            <label htmlFor={name}>{label}</label>
            <input  type={type} 
                    name={name} 
                    value={value} 
                    onChange={onInputChange}/>
        </div>
    );
}
Input.prototypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}
export default Input;