import React from 'react';
import PropTypes from 'prop-types';
import { Button, Select, Form } from "../";
import "./planTrip.scss"

export const PlanTrip = React.memo(({onSubmit, onSourceChange, onDestinationChange}) => {
    console.log("On PlanTrip Init");
    return (
        <div className="component_wrapper plaintip_wrapper">
            <h3 className="card_heading"> PLAN MY TRIP</h3>
            <Form>
                <Select 
                    options={ [{id:"1", value:"MAA", label:"Chennai"},{id:"2", value:"BLR", label:"Banglore"}]}
                    selector="source"
                    onChange={onSourceChange}
                    label='Source'></Select>
                <Select options={ [{id:"1", value:"MUM", label:"Mumbai"},{id:"2", value:"PAR", label:"Paris"}]}
                    selector="destination"
                    onChange={onDestinationChange}
                    label='Destination'></Select>
                <Button selector="full" type="button" onClick={onSubmit}>SEARCH</Button>
            </Form>
        </div>
    );
});

PlanTrip.propTypes = {
    onSubmit: PropTypes.func, 
    onSourceChange: PropTypes.func, 
    onDestinationChange: PropTypes.func
};

// console.log("Init PlanTrip");
// const [source, setSource] = useState('');
// const [destination, setDestination] = useState('');
// const onFormSubmit = (event) => {
//     event.preventDefault();
//     console.log(source, destination);
// }
// onChange={(event)=>{setDestination(event.target.value)}}
// onChange={(event)=>{setSource(event.target.value)}}