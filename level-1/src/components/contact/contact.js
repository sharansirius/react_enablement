import React, {useState} from 'react';
import Style from './contact.module.scss';
import { Button, Select, Input } from "..";

function Contact() {

  const [htValue,setHtValue] = useState("Chennai");
  const [wywgValue,setWywgValue] = useState("Goa");
  const [contactNo,setContactNo] = useState("");
  const [name,setName] = useState("");

  const formSubmit = ((event) => {
    event.preventDefault();
  });

  return (
    <>
      <div className={Style.contact}>
        <div className={Style.formWrapper}>
          <h1>Contact Us</h1>
          <p>Our sales team will reach out to you ASAP!</p>
          <form onSubmit={formSubmit}>
            <Input label="Name" 
                    name="name" 
                    type="text" 
                    value={name}
                    onChange={value => setName(value)}></Input>           
            <Select label = "Your Home Town"
                    name = "hmtwn"
                    options = {
                      [                         
                        {value:"Chennai", id:"o4" }, 
                        {value: "Sullurpeta", id:"o5"}, 
                        {value: "Orissa", id:"o6"}
                      ]
                    }
                    onChange={value => setHtValue(value)}
                    value= {htValue}></Select>
            <Select label = "Where would you like to go?"
                    name = "whereYouWantToGo"
                    options = {
                      [
                        {value:"Goa", id:"o1"  }, 
                        {value: "Kashmir", id:"o2"}, 
                        {value: "London", id:"o3"}
                      ]
                    }
                    onChange={value => setWywgValue(value)}
                    value= {wywgValue}></Select>
            <Input label="Contact Number" 
                   name="contactNumber" 
                   type="tel" 
                   value={contactNo}
                   onChange={value => setContactNo(value)}></Input>        
            <Button label="Submit Interest"></Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact;
