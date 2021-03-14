export const cloneObject = (obj:any) => {
    try {
        return JSON.parse(JSON.stringify(obj));
    } catch (error) {
        console.error(error);
    }
}