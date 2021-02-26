import React, { useState } from "react";
import styles from "./blogs.module.scss";
import { Search, VisibleBlogs } from "../../components";

function Blogs() {
  console.log("--- Container --- Blogs init");
  const [skey,setSkey] = useState('');

  return (
    <div className={styles.blogs}>
      <Search searchText={skey} onChange={e => setSkey(e.target.value)}/>
      <VisibleBlogs skey={skey} />
    </div>
  );
}

export default React.memo(Blogs);
