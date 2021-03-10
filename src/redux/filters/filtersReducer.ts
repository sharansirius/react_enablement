import { FILTER_INIT, UPDATE_FILTER, ADD_FILTER } from "./filtersTypes";
const filters = (state = [], action: FilterAction) => {
    let index = 0;
    switch (action.type) {
      case FILTER_INIT:
        return [...action.filters];
      case UPDATE_FILTER:
        index = action.index as number;
        return [
          ...state.slice(0, index),
          action.filter,
          ...state.slice(index + 1),
        ];     
      case ADD_FILTER:
        return [...action.filters];         
      default:
        return state;
    }
  };
  
  export default filters;