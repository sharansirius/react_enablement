import React, { useState } from "react";
import styles from "./blogs.module.scss";
import { SearchAndCreateNew, VisibleBlogs } from "../../components";

function Blogs() {
  console.log("--- Container --- Blogs init");
  const [skey,setSkey] = useState('');
  return (
    <div className={styles.blogs}>
      <SearchAndCreateNew searchText={skey} onSearch={(e)=>{setSkey(e.target.value)}} />
      <VisibleBlogs skey={skey} />
    </div>
  );
}
export default React.memo(Blogs);
