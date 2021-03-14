import React from "react";
import styles from "./filters.module.scss";
import { Filter, Heading } from "../";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function Filters() {
  console.log("Filters Init");
  const filters = useSelector((state: BlogAppStore) => state.blogs.filters);
  return (
    <div className={styles.filters}>
      <Heading label="Filters" classSelector="small" />
      {
        (filters&& filters.length > 0) ? 
            filters.map((item: Filter,index:number) => (
              <Filter key={uuidv4()} item={item} index={index}/>   
            )) 
            : ''
      }   
    </div>
  );
}

export default Filters;
