import { ADD_BLOG, BLOGS_INIT, UPDATE_BLOGS, FILTER_INIT, UPDATE_FILTER, ADD_FILTER, SET_ACTIVE_BLOG } from "./blogsTypes";
export const addBlog = (data: Blog) => ({ type: ADD_BLOG,  data});
export const blogsInit = (data: Array<Blog>):BlogAction => ({ type: BLOGS_INIT, data });
export const updateBlogs = (data:UpdateBlogsAction) => ({type: UPDATE_BLOGS, data})

export const initFilters = (data:Array<Filter>) => ({type:FILTER_INIT, data});
export const updateFilter = (data:UpdateFilterActionBlogAction) => ({type:UPDATE_FILTER, data});
export const addFilters = (data:Array<Filter>) => ({type:ADD_FILTER, data});

export const setActiveBlog = (data:SelectedBlogAction) => ({ type: SET_ACTIVE_BLOG, data });