// {process.env.REACT_APP_DEV_END_POINT}
import axios from "axios";
import ENDPOINTS from "./../constants/endPoints";

const getESTTime = async (type) => {
    return await axios(ENDPOINTS.ESTTIME.path)
        .then((response) => {
            if (response && response.data && response.data.currentDateTime) {
                let temp = response.data.currentDateTime.split("T");
                return {
                    title: temp[0]+" - "+type,
                    time: temp[1].split("-")[0]
                }
            }
        })
        .catch(err => err )
}

const getISTTime = ( current, type ) => {
    return new Promise( resolve => { 
        resolve({        
            title: current.getFullYear() +" " + current.getMonth() + " " + current.getDate()+ " - " + type,
            time: current.getHours() + ":" + current.getMinutes() 
        })
    })

}

const getSessionTime = async ( init, title, current ) => {
    return new Promise( resolve => { 
        resolve({  
        title: title,
        time: current.getMinutes() - init.getMinutes()
        })
    })
}

export const getTimeAndDate = async ({ init, current, type, title }) => {
    if(type && current){
        switch(type) {
            case 'session':
                return getSessionTime(init, title, current).then(res => res );
            case 'IST':
                return getISTTime( current, type ).then(res => res );
            case 'EST':
                return getESTTime(type)
                    .then(res => res )
                    .catch(err => console.log(err) );
            default:
                return { title: '', time: '' }
        }
    }    
}

