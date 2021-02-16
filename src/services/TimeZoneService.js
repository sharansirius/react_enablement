// {process.env.REACT_APP_DEV_END_POINT}
import axios from "axios";
import ENDPOINTS from "./../constants/endPoints";

export const getWorldClocks = async () => {
    return await axios(ENDPOINTS.ESTTIME.path)
    .then(response => response )
    .catch(err => err )
}
