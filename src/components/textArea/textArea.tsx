import React, { ChangeEvent } from "react";
import styles from "./textArea.module.scss";

function TextArea({ value, name, onChange, placeholder }: TextAreaProps) {
  console.log("TextArea init");
  return (
    <textarea
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.textArea}>
    </textarea>
  );
}
interface TextAreaProps {
  value: string;
  name: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
export default TextArea;
