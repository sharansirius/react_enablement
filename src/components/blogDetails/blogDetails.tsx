import React, { useState, useEffect} from "react";
import styles from "./blogDetails.module.scss";
import { Card, JumboImage, Button, TextArea } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { setActiveBlog, updateBlogs } from "../../actions"
import { Dispatch } from "redux";

function BlogDetails() {
  console.log("Blog Details init");
  const [editClicked, setEditClicked] = useState(false);  
  const {blog, index} = useSelector((state: BlogAppStore) => state.selectedBlog);
  const dispatch: Dispatch = useDispatch();
  const [descreption, setDescription] =  useState(blog?.details);

  const saveContent = () => {
    setEditClicked(!editClicked);
    const modifiedBlog = {...blog, ...{details:descreption}};
    dispatch(setActiveBlog(modifiedBlog,index));
    dispatch(updateBlogs(modifiedBlog,index));
  };
  
  useEffect(()=>{
    setDescription(blog?.details)
  },[blog])

  return (
      <div className={styles.blogDetails}>
        <JumboImage src={blog?.photo} />
        <h2>{blog?.title}</h2>
        {(!editClicked) ? (
          <>
            <p>{blog?.details}</p>
            <Button onClick={()=>setEditClicked(!editClicked)} classSelector="secondary">  Edit Content </Button>
          </>
        ) : (
          <>
            <TextArea value={descreption} name="description" onChange={(event)=>{setDescription(event.target.value)}} />    
            <Button onClick={()=>setEditClicked(!editClicked)} classSelector="secondary"> Cancel </Button>
            <Button onClick={saveContent} classSelector="primary">Save Content</Button>
          </>
        )}
      </div>
  );
}

export default BlogDetails;
