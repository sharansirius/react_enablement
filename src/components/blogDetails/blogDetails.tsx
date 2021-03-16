import React, { useState, useEffect, ChangeEvent } from "react";
import styles from "./blogDetails.module.scss";
import { JumboImage, BlogForm, Button, Heading } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { setActiveBlog, updateBlogs } from "../../redux";
import { Dispatch } from "redux";
import  * as utils  from "../../utils/localstorage";

function BlogDetails() {
  console.log("Blog Details init");
  const {blog, index} = useSelector((state: BlogAppStore) => state.blogs.selectedBlog);
  const dispatch: Dispatch = useDispatch();  
  const [editClicked, setEditClicked] = useState(false);  
  const [title, setTitle] =  useState('');
  const [descreption, setDescription] =  useState('');
  utils.setLocalData("isEdited", editClicked);

  const onDestinationChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
    utils.setLocalData("isEdited", true);
    setDescription(event.target.value)
  }
  
  const onTitleChange = (event:ChangeEvent<HTMLInputElement>) => {
    utils.setLocalData("isEdited", true);
    setTitle(event.target.value)
  }

  const onEditToggle = () => {
    setEditClicked(!editClicked);
    utils.setLocalData("isEdited", editClicked);    
  }

  const saveContent = () => {
    onEditToggle();
    const modifiedBlog = {...blog, ...{title: title, details:descreption}};
    dispatch(setActiveBlog({blog:modifiedBlog,index:index}));
    dispatch(updateBlogs({blog:modifiedBlog,index:index}));
    utils.setLocalData("isEdited", editClicked);
  };

  useEffect(()=>{
    setTitle(blog?.title)
    setDescription(blog?.details)
  },[blog])

  return (
      <div className={styles.blogDetails}>
        <JumboImage src={blog?.photo} />
        {(!editClicked) ? (
          <>
            <Heading classSelector="large" label={title} />
            <p>{descreption}</p>
            <Button onClick={onEditToggle} classSelector="secondary">  Edit Content </Button>
          </>
        ) : (
          <>
            <BlogForm title={title} 
                      details={descreption} 
                      onTitleChange={onTitleChange} 
                      onDetailsChange={onDestinationChange}/>           
            <div>  
              <Button onClick={onEditToggle} classSelector="secondary"> Cancel </Button>
              <Button onClick={saveContent} classSelector="primary">Save Content</Button>
            </div>
          </>
        )}
      </div>
  );
}

export default React.memo(BlogDetails);
