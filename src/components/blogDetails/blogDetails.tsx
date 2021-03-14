import React, { useState, useEffect, ChangeEvent} from "react";
import styles from "./blogDetails.module.scss";
import { JumboImage, Button, TextArea, Heading } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { setActiveBlog, updateBlogs } from "../../redux";
import { Dispatch } from "redux";
import  * as utils  from "../../utils/localstorage";

function BlogDetails() {
  console.log("Blog Details init");
  const [editClicked, setEditClicked] = useState(false);  
  const {blog, index} = useSelector((state: BlogAppStore) => state.blogs.selectedBlog);
  const dispatch: Dispatch = useDispatch();
  const [descreption, setDescription] =  useState(blog?.details);
  utils.setData("isEdited", editClicked);

  const saveContent = () => {
    onEditToggle();
    const modifiedBlog = {...blog, ...{details:descreption}};
    dispatch(setActiveBlog({blog:modifiedBlog,index:index}));
    dispatch(updateBlogs({blog:modifiedBlog,index:index}));
    utils.setData("isEdited", editClicked);
  };

  const onDestinationChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
    utils.setData("isEdited", true);
    setDescription(event.target.value)
  }  

  const onEditToggle = () => {
    setEditClicked(!editClicked);
    utils.setData("isEdited", editClicked);    
  }

  useEffect(()=>{
    setDescription(blog?.details)
  },[blog])

  return (
      <div className={styles.blogDetails}>
        <JumboImage src={blog?.photo} />
        <Heading classSelector="large" label={blog?.title} />
        {(!editClicked) ? (
          <>
            <p>{blog?.details}</p>
            <Button onClick={onEditToggle} classSelector="secondary">  Edit Content </Button>
          </>
        ) : (
          <>
            <TextArea value={descreption} name="description" onChange={onDestinationChange} />  
            <div>  
              <Button onClick={onEditToggle} classSelector="secondary"> Cancel </Button>
              <Button onClick={saveContent} classSelector="primary">Save Content</Button>
            </div>
          </>
        )}
      </div>
  );
}

export default BlogDetails;
