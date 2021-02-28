import axios from "axios";
import ENDPOINTS from "../constants/endPoints";

export const getUsers = async () => {
    return await axios(process.env.REACT_APP_DEV_END_POINT+ ENDPOINTS.USERS.PATH)
    .then(response => response)
    .catch(err => err);  
};
