import React from 'react';
import Style from './list.module.scss';
import { Destination } from "../..";
import { CONSTANTS } from "../../../constants/constants";
import PropTypes from 'prop-types';

function List(props) {
  console.log(props);
  return (props.items && props.items.length > 0) ? 
    (
      <>
        <div className={Style.contentWrapper}>
          <h1>{props.heading}</h1>
          <p>{props.subHeading}</p>
          <div className={Style.items}>
            {
              (props.type === CONSTANTS.LIST_TYPE_DESTINATION) ?
                props.items.map(item => ( //List of destination
                  <Destination
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    location={item.location}
                    description={item.description}></Destination>        
                )) : (props.type === CONSTANTS.LIST_TYPE_SIMILAR_ITEMS) ? '': ''
            }
          </div>
        </div>
      </>
    ) : <h2 className={Style.noDestinations}> No Destination available !!</h2>;
}

List.prototypes = {
  items: PropTypes.array,
  type: PropTypes.string,
  heading: PropTypes.string,
  subHeading: PropTypes.string
}
export default List;
