// {process.env.REACT_APP_DEV_END_POINT}
import axios from "axios";
import ENDPOINTS from "./../constants/endPoints";

export const getFlights = async (sourceCode, destinationCode) => {
    return await axios(process.env.REACT_APP_DEV_END_POINT+ ENDPOINTS.FLIGHTS.path + sourceCode +  ENDPOINTS.FLIGHTS.key2 + destinationCode)
    .then(response => response )
    .catch(err => err )  
};