import axios from "axios";
import ENDPOINTS from "../constants/endPoints";

export const getBlogs = async () => {
    return await axios(process.env.REACT_APP_DEV_END_POINT+ ENDPOINTS.BLOGS.PATH)
    .then(response => response)
    .catch(err => err);  
};