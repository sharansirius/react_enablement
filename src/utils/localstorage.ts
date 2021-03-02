export const checkSupport = ()=> {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch(e) {
        return false;
    }    
}

export const getData = (key:string) => {
    try {
        return JSON.parse(localStorage.getItem(key) as string);
    } catch(e) {
        console.log(e);
        return null;
    }
}


export const setData = (key:string,data:any) => {
    try {
        return localStorage.setItem(key,JSON.stringify(data));
    } catch(e) {
        console.log(e);
        return null;
    }
}