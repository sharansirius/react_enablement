import { ADD_BLOG, BLOGS_INIT, UPDATE_BLOGS } from "./blogsTypes";
export const addBlog = (blog: Blog) => ({ type: ADD_BLOG,  blog});
export const blogsInit = (data: Array<Blog>):BlogAction => ({ type: BLOGS_INIT, data });
export const updateBlogs = (blog:Blog,index:number) => ({type: UPDATE_BLOGS,index, blog})
