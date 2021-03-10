import { SET_ACTIVE_BLOG } from "./selectedBlogTypes";
export const setActiveBlog = (blog:Blog,index:number):SelectedBlogAction => ({ type: SET_ACTIVE_BLOG, blog, index });