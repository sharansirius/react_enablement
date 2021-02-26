import { ACTION_TYPES } from "../actions/actionTypes";
const blogs = (state = [], action: BlogAction ) => {
  let index = 0;
  switch (action.type) {
    case ACTION_TYPES.ADD_BLOG:
      return [...state, { name: "rapa  rap" }];
    case ACTION_TYPES.BLOGS_INIT:
      return [...state, ...action.data];
    case ACTION_TYPES.UPDATE_BLOGS:
      index = (action.index) as number;
      return [
        ...state.slice(0,index),
        action.blog,
        ...state.slice(index + 1),
      ];
    case ACTION_TYPES.SEARCH_BLOGS:
      return state
    default:
      return state;
  }
};

export default blogs;
