import { ACTION_TYPES } from "../actions/actionTypes";
const theme = (state='dark', action:ThemeAction) => {
    switch (action.type) {
      case ACTION_TYPES.SET_THEME:
        return action.theme;
      default:
        return state;
    }
  };
  
  export default theme;
  