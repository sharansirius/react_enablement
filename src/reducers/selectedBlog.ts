import { ACTION_TYPES } from "../actions/actionTypes";
const selectedBlog = (state = {}, {type,blog,index}:SelectedBlogAction) => {
  switch (type) {
    case ACTION_TYPES.SET_ACTIVE_BLOG:
      return {...state, ...{blog, index}};
    default:
      return state;
  }
};

export default selectedBlog;
