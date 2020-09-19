import {React,useState} from 'react';
import './destination.scss';
import PropTypes from 'prop-types';
import { destinationService } from "../../services/destinations";

function Destinations() {
  const {destinationList, setdestinationList} = useState([]);
  destinationService.fetchAllDestinations().then((res) => {
    console.log("inside", res)
    setdestinationList(res);
  });  

  if(!destinationList) {
    return <h5> No Destination available !!</h5>
  } else {
    console.log("destinationList",destinationList);
    return (
      <div className="destinationList">
        <h1>Destinations</h1>
        {
          destinationList.map(item=> (
            <div key={item.id}>
              <img src={item.image ? '../../static/images' + item.image : ''} alt="place" />
              <h4>{item.title}</h4>
              <p>{item.location}</p>
              <p>{item.description}</p>
            </div>
          ))
        }
      </div>
    );
  } 
}

Destinations.prototypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string
}

export default Destinations;
