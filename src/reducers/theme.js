const theme = (state="light", action) => {
    switch(action.type){
        case"APPLY_THEME":
            return action.theme;
        default:
            return state;
    }
}


export default theme