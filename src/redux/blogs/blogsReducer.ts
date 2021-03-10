import { ADD_BLOG, BLOGS_INIT, UPDATE_BLOGS, SEARCH_BLOGS } from "./blogsTypes";
const blogs = (state = [], action: BlogAction ) => {
  switch (action.type) {
    case ADD_BLOG:
      return [...state, action.blog];
    case BLOGS_INIT:
      return [...state, ...action.data];
    case UPDATE_BLOGS:
      return state.map((blog:Blog)=>{
        if(blog.title === action.blog?.title){
          blog.details = action.blog?.details;
        }
        return blog;
      })
    case SEARCH_BLOGS:
      return state
    default:
      return state;
  }
};

export default blogs;
