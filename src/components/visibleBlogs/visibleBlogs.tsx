import React, { useEffect, useState } from "react";
// import styles from "./visibleBlogs.module.scss";
import * as _services from "../../services/BlogService";
import { List } from "../";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { blogsInit, initFilters, setActiveBlog, addFilters } from "../../actions";

function VisibleBlogs({ skey }: VisibleBlogsProp) {
  console.log("VisibleBlogs init");
  const dispatch: Dispatch = useDispatch();
  const [data, setData] = useState<Blog[]>([]);

  const blogs = useSelector((state: BlogAppStore) => state.blogs);
  const filters = useSelector((state: BlogAppStore) => state.filters);

  /** Generate the filters dynamically */
  const getFiltersList = (blogs: Array<Blog>, resetFilters?:boolean): Array<Filter> => {
    let filtersArray: Array<Filter> = [];
    if(resetFilters){
      blogs.map((blog) => {
          if (filters.every((filter) => filter.name !== blog.type)) {
            filtersArray.push({ name: blog.type, checked: true });
          }
      });   
      filtersArray = [...filtersArray, ...filters];
    } else {
      blogs.map((blog) => {
        if (filtersArray.length > 0) {
          if (filtersArray.every((filter) => filter.name !== blog.type)) {
            filtersArray.push({ name: blog.type, checked: true });
          }
        } else {
          filtersArray.push({ name: blog.type, checked: true });
        }
      });
    }
    return filtersArray;
  };

  /** Reset filters and blogs data */
  const resetBlogsBasedOnFilter = () =>{
    if (blogs && blogs.length > 0 && filters && filters.length > 0) {
      const checkedFilters:Array<string> = []
      filters.forEach((filter) => {
        if (filter.checked) checkedFilters.push(filter.name);
      });
      if (checkedFilters && checkedFilters.length > 0) {
        const filteredData = blogs.filter((blog: Blog) => checkedFilters.indexOf(blog.type)!==-1 );
        setData(filteredData);
      } else {
        setData([]);
      }
    }    
  }

  /** On init set necessary data */
  useEffect(() => {
    _services.getBlogs().then((res) => {
      if (res && res.data && res.data.length > 0) {
        setData(res.data);
        dispatch(blogsInit(res.data));
        dispatch(setActiveBlog(res.data[0], 0));
        dispatch(initFilters(getFiltersList(res.data)));
      }
    });
  }, []);

  /** Checks when there is some search key entered or blogs object is modified */
  useEffect(() => {
    if (data && data.length > 0) {
      if (skey) {
        const searchResult = data.filter((blog: Blog) => {
          return blog.title.toLowerCase().indexOf(skey.toLowerCase()) !== -1;
        });
        setData(searchResult);
      } else {
        dispatch(addFilters(getFiltersList(blogs,true)));
        // resetBlogsBasedOnFilter();
      }
    }
  }, [skey, blogs]);

  /** Checks when filters are modified */
  useEffect(() => {
    console.log("--------- calling reset filters ----------");
    resetBlogsBasedOnFilter();
  }, [filters]);

  return <List data={data} />;
}

interface VisibleBlogsProp {
  skey: string;
}
export default VisibleBlogs;
