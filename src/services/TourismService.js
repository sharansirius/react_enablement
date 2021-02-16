// {process.env.REACT_APP_DEV_END_POINT}
import axios from "axios";
import ENDPOINTS from "./../constants/endPoints";

export const getCities = async () => {
    return await axios(process.env.REACT_APP_DEV_END_POINT+ ENDPOINTS.CITIES.path)
    .then(response => response )
    .catch(err => err )    
}

export const getTouristSpots = async (destinationCode) => {
    return await axios(process.env.REACT_APP_DEV_END_POINT+ ENDPOINTS.TOURISM.path + destinationCode)
    .then(response => response )
    .catch(err => err )
}

export const getCityInformation = async (destinationCode) => {
    return await axios(process.env.REACT_APP_DEV_END_POINT+ ENDPOINTS.CITYDESCRIPTION.path + destinationCode)
    .then(response => response )
    .catch(err => err )    
}

