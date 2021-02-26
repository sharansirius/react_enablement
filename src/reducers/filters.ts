import { ACTION_TYPES } from "../actions/actionTypes";
const filters = (state = [], action:FilterAction) => {
    switch (action.type) {
      case ACTION_TYPES.FILTER_INIT:
        return [...action.filters];
    case ACTION_TYPES.UPDATE_FILTER:
        return state;        
      default:
        return state;
    }
  };
  
  export default filters;
  