import { ACTION_TYPES } from "../actions/actionTypes";
const filters = (state = [], action: FilterAction) => {
  let index = 0;
  switch (action.type) {
    case ACTION_TYPES.FILTER_INIT:
      return [...action.filters];
    case ACTION_TYPES.UPDATE_FILTER:
      index = action.index as number;
      return [
        ...state.slice(0, index),
        action.filter,
        ...state.slice(index + 1),
      ];     
    case ACTION_TYPES.ADD_FILTER:
      return [...action.filters];         
    default:
      return state;
  }
};

export default filters;
