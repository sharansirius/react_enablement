import React from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { setActiveBlog } from "../../actions";
import styles from "./blog.module.scss";

function Blog({ blog, index }: BlogProps) {
  console.log("Blog init");
  const dispatch: Dispatch = useDispatch();
  return (
    <div className={styles.blog} onClick={()=>dispatch(setActiveBlog(blog,index))}>
      <h4>{blog?.title}</h4>
      <p className={styles.type}>{blog?.type}</p>
      <p className={styles.details}>{blog?.details}</p>
    </div>
  );
}

interface BlogProps {
  blog: Blog,
  index: number
}

export default React.memo(Blog);
