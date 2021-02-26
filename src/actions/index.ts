import { ACTION_TYPES } from "./actionTypes"
export const setTheme = (theme: string) => ({ type: ACTION_TYPES.SET_THEME, theme });
export const addBlog = (theme: string) => ({ type: ACTION_TYPES.ADD_BLOG, theme });
export const blogsInit = (data: Array<Blog>):BlogAction => ({ type: ACTION_TYPES.BLOGS_INIT, data });
export const updateActiveBlog = (data: Array<Blog>):BlogAction => ({ type: ACTION_TYPES.UPDATE_ACTIVE_BLOG, data });
export const updateBlogs = (blog:Blog,index:number) => ({type: ACTION_TYPES.UPDATE_BLOGS,index, blog})
export const setActiveBlog = (blog:Blog,index:number):SelectedBlogAction => ({ type: ACTION_TYPES.SET_ACTIVE_BLOG, blog, index });
export const initFilters = (filters:Array<Filter>) => ({type:ACTION_TYPES.FILTER_INIT, filters});
export const updateFilter = () => ({type:ACTION_TYPES.UPDATE_FILTER});
