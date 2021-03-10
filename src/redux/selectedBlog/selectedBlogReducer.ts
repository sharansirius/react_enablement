import { SET_ACTIVE_BLOG } from "./selectedBlogTypes";
const selectedBlog = (state = {}, {type,blog,index}:SelectedBlogAction) => {
    switch (type) {
      case SET_ACTIVE_BLOG:
        return {...state, ...{blog, index}};
      default:
        return state;
    }
  };
  
  export default selectedBlog;