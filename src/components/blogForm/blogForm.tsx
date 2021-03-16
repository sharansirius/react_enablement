import React, { ChangeEvent } from "react";
import styles from "./blogForm.module.scss";
import { Input, TextArea } from "../";

function BlogForm({ title, details, onTitleChange, onDetailsChange }: BlogFormProps) {
  console.log("BlogForm init");
  return (
    <div className={styles.blogForm}>
      <Input
        classSelector="long"
        value={title}
        name="title"
        type="text"
        onChange={onTitleChange} />
      <TextArea
        value={details}
        name="title"
        onChange={onDetailsChange} />
    </div>
  );
}

interface BlogFormProps {
  title: string;
  details: string;
  onTitleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onDetailsChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default BlogForm;
