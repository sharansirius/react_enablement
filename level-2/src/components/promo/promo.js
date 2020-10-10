import React, {useState} from 'react';
import Style from './promo.module.scss';
import image from './adventure.png';
import { Button, Select } from "..";

function Promo() {
  const [car, setCar] = useState("Tigor");
  const formSubmit = ((event) => {
    event.preventDefault();
  });

  return (
    <>
      <div className={Style.promo}>
        <div className={Style.formWrapper}>
          <h4>Welcome to explorer</h4>
          <h1>Your adventure travel expert in South</h1>
          <form onSubmit={formSubmit}>
            <Select label = "Choose a car:"
                    labelType = "primary"
                    name = "carList"
                    options = { 
                      [ 
                        {value:"Altroz", id:"a1" }, 
                        {value: "Tigor", id:"a2"}, 
                        {value: "Tiago", id:"a3"},                     
                        {value: "Zest", id:"a4"},                     
                        {value: "Alto", id:"a5"}
                      ]
                    }
                    onChange={value => setCar(value)}
                    value={car}></Select>            
            <Button label="Explore"></Button>
          </form>

        </div>

        <div className={Style.promoImage}>
          <img src={image} alt="adventure"/>
        </div>
      </div>
    </>
  )
}

export default Promo;
