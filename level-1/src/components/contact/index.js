import React from 'react';
import './contact.scss';
import { Button } from "../../components";

function Contact() {

  const formSubmit = ((event) => {
    event.preventDefault();
  });

  return (
    <>
      <div className="component-wrapper contact">
        <div className="form-wrapper">
          <h1>Contact Us</h1>
          <p>Our sales team will reach out to you ASAP!</p>
          <form onSubmit={formSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input type="text" />
            </div>
            <div className="form-field">
              <label htmlFor="hmtwn">Your Home Town </label>
              <select name="hmtwn" className="hmtwn list">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="whereYouWantToGo">Where would you like to go?</label>
              <select name="whereYouWantToGo" className="whereYouWantToGo list">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="contactNumber">Contact Name</label>
              <input type="tel" name="contactNumber" />
            </div>
            <Button btn_label="Submit Interest"></Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact;
