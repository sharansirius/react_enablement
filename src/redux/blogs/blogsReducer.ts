import { ADD_BLOG, BLOGS_INIT, UPDATE_BLOGS, FILTER_INIT, UPDATE_FILTER, ADD_FILTER, SET_ACTIVE_BLOG } from "./blogsTypes";
import { cloneObject } from "../../utils/utils"
const initialState = {
  list: [{ details: "", photo: "", title: "", type: "" }],
  selectedBlog: {
    blog: { details: "", photo: "", title: "", type: "" },
    index: 0,
  },
  filters: [{ name: "", checked: "" }]
};

const blogs = (state = initialState, action: BlogAction) => {
  switch (action.type) {
    case ADD_BLOG:
      return { ...state, ...{ list: [action.data, ...state.list] } };

    case BLOGS_INIT:
      return { ...state, ...{ list: action.data } };

    case UPDATE_BLOGS: {
      const data = action.data as UpdateBlogsAction;
      const newList = cloneObject(state.list);
      newList.map((blog: Blog) => {
        if (blog.title === data.blog.title) {
          blog.details = data?.blog.details;
        }
        return blog;
      });
      return { ...state, ...{ list: newList } };
    }

    case FILTER_INIT:
      return { ...state, ...{ filters: action.data } };

    case UPDATE_FILTER: {
      const data = action.data as UpdateFilterActionBlogAction;
      return {
        ...state,
        ...{
          filters: [
            ...state.filters.slice(0, data.index),
            data.filter,
            ...state.filters.slice(data.index + 1),
          ],
        },
      };
    }

    case ADD_FILTER:
      return { ...state, ...{ filters: action.data } };

    case SET_ACTIVE_BLOG:
      return { ...state, ...{ selectedBlog: action.data } };

    default:
      return state;
  }
};

export default blogs;
