import React from "react";
// import styles from "./list.module.scss";
import { v4 as uuidv4 } from 'uuid';
import { Blog } from "../";

function List({data}: ListProps) { 
  console.log("List init");
  return (
    <>
      {
        (data && data.length > 0) ?
          data.map((item:Blog,index:number) => (
            <Blog key={uuidv4()} blog={item} index={index}/>
          )) 
        : <p>Loading...</p>
      }
    </>
  );
}

interface ListProps {
  data: Array<Blog>
}

export default List;
