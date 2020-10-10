import React from 'react';
import Style from './destination.module.scss';
import PropTypes from 'prop-types';
import { Button } from "..";
import {Link} from "react-router-dom";

function Destination(props) {
  return (
    <div className={Style.item}>
      <img src={process.env.PUBLIC_URL + '/img/' + props.image} alt="place" />
      <h4>{props.title}</h4>
      <p>{props.location}</p>
      <p>{props.description}</p>
      <Link to={{
          pathname:"/details",
          state: {
            id: props.id
          }
        }}> <Button label="Read More"></Button> </Link>
    </div>
  )
}

Destination.prototypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string
}

export default Destination;
