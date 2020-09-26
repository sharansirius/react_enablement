import React from 'react';
import './promo.scss';
import image from './adventure.png';

function Promo() {

  const formSubmit = ((event) => {
    event.preventDefault();
  });

  return (
    <>
      <div className="component-wrapper promo">
        <div className="form-wrapper">
          <h4>Welcome to explorer</h4>
          <h1>Your adventure travel expert in South</h1>
          <form onSubmit={formSubmit}>
            <p className="cars-label" htmlFor="cars">Choose a car:</p>
            <select name="cars-list" className="cars-list">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </form>

        </div>

        <div className="promo-image">
          <img src={image} alt="adventure"/>
        </div>
      </div>
    </>
  )
}

export default Promo;
