import React, { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { setActiveBlog } from "../../redux";
import styles from "./blog.module.scss";
import { Heading } from '..'
import  * as utils  from "../../utils/localstorage";

function Blog({ blog, index }: BlogProps) {
  console.log("Blog init");
  const dispatch: Dispatch = useDispatch();

  const onItemClick = (event:MouseEvent<HTMLElement>) => {
    if(utils.getData("isEdited")){
      if(confirm("Are you sure you want to go next without saving ?")){
        dispatch(setActiveBlog({blog,index}));
      } else {
        event.preventDefault();
      }
    } else {
      dispatch(setActiveBlog({blog,index}));
    }

  }

  return (
    <div className={styles.blog} onClick={onItemClick}>
      <Heading label={blog?.title} classSelector="small"/>
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
