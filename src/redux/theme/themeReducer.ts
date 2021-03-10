import { SET_THEME } from "./themeTypes";
const theme = (state='dark', action:ThemeAction) => {
    switch (action.type) {
      case SET_THEME:
        return action.theme;
      default:
        return state;
    }
  };
  
  export default theme;
  