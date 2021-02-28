import { ACTION_TYPES } from "../actions/actionTypes";
const blogs = (state = [], action: BlogAction ) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_BLOG:
      return [...state, action.blog];
    case ACTION_TYPES.BLOGS_INIT:
      return [...state, ...action.data];
    case ACTION_TYPES.UPDATE_BLOGS:
      return state.map((blog:Blog)=>{
        if(blog.title === action.blog?.title){
          blog.details = action.blog?.details;
        }
        return blog;
      })
    case ACTION_TYPES.SEARCH_BLOGS:
      return state
    default:
      return state;
  }
};

export default blogs;
