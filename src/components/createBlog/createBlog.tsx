import React, { MouseEvent, useState } from "react";
import styles from "./createBlog.module.scss";
import { Modal, Input, TextArea, Button, Heading } from "../";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { addBlog } from "../../actions";

function CreateBlog({clickToHide}:CreateBlogProps) { 
  console.log("CreateBlog init");
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');  
  const dispatch:Dispatch = useDispatch();
  const saveBlog = (event:MouseEvent<HTMLButtonElement>) => {
    dispatch(addBlog({title:title,details:details,type:"Local",photo:""}));
    clickToHide(event);
  }

  return (
    <Modal closeModal={clickToHide}>
      <div className={styles.createBlog}>
        <Heading  classSelector="large" label="Add new Blog" />
        <Input classSelector="long" value={title} name="title" type="text" onChange={(e)=> setTitle(e.target.value)}/>
        <TextArea value={details} name="title" onChange={(e)=> setDetails(e.target.value)}/>
        <Button classSelector="primary" onClick={saveBlog}>Add</Button>
      </div>
    </Modal>
  );
}

interface CreateBlogProps {
  clickToHide:(event: MouseEvent<HTMLElement>) => void,
}

export default CreateBlog;
