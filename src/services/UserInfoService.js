// {process.env.REACT_APP_DEV_END_POINT}
import axios from "axios";
import ENDPOINTS from "./../constants/endPoints";

export const loginInUser = async (data) => {
    return await axios(process.env.REACT_APP_DEV_END_POINT+ ENDPOINTS.LOGIN.path+data.username+ENDPOINTS.LOGIN.key2+data.password)
    .then(response => response )
    .catch(err => err )
}

export const getUserDetials = async () => {
    
}


