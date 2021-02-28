import React from "react";
import styles from "./filters.module.scss";
import { Filter } from "../";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function Filters() {
  console.log("Filters Init");
  const filters = useSelector((state: BlogAppStore) => state.filters);
  return (
    <div className={styles.filters}>
      <h3>Filters</h3>
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

// interface FiltersProps {
//   children: ReactChild | ReactChildren,
//   width: string
// }

export default Filters;
