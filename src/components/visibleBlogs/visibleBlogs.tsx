import React, { useEffect, useState } from "react";
// import styles from "./visibleBlogs.module.scss";
import * as _services from "../../services/BlogService";
import { List } from "../";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { blogsInit, initFilters, setActiveBlog } from "../../actions";

function VisibleBlogs({ skey }: VisibleBlogsProp) {
  console.log("VisibleBlogs init");
  const dispatch: Dispatch = useDispatch();
  const [data, setData] = useState<Blog[]>([]);
  const blogs = useSelector((state: BlogAppStore) => state.blogs);
  const getFiltersList = (blogs:Array<Blog>):Array<Filter>=> {
    const filters:Array<Filter> = [];
    blogs.map((blog)=>{
      if( filters.length > 0) {
        if( filters.every( (filter) => (filter.name !== blog.type) ) ) {
          filters.push({ name: blog.type, checked: true})
        }
      } else {
        filters.push({ name: blog.type, checked: true})
      }

    })
    return filters;
  }

  useEffect(() => {
    _services.getBlogs().then((res) => {
      if (res && res.data && res.data.length > 0) {
        setData(res.data);
        dispatch(blogsInit(res.data));
        dispatch(setActiveBlog(res.data[0], 0));
        dispatch(initFilters(getFiltersList(res.data)))
      }
    });
  }, []);

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      if (skey) {
        const searchResult = blogs.filter((blog: Blog) => {
          return blog.title.toLowerCase().indexOf(skey.toLowerCase()) !== -1;
        });
        setData(searchResult);
      } else {
        setData(blogs);
      }
    }
  }, [skey, blogs]);

  return <List data={data} />;
}

interface VisibleBlogsProp {
  skey: string;
}
export default VisibleBlogs;
