import React, { ChangeEvent, useState } from "react";
import styles from "./searchAndCreateNew.module.scss";
import { Search, Button, CreateBlog } from "..";

function SearchAndCreateNew({ onSearch, searchText }: SearchAndCreateNewProps) {
  console.log("SearchAndCreateNew init");
  const[showCreateNew, setShowCreateNew] = useState(false);
  return (
    <>
      <div className={styles.searchWrapper}>
        <div className={styles.search}>
          <Search searchText={searchText} onChange={onSearch} />
        </div>
        <Button onClick={()=>setShowCreateNew(true)} classSelector="primary">New</Button>
      </div>
      {showCreateNew && <CreateBlog clickToHide={()=>setShowCreateNew(false)}/>}
    </>
  );
}

interface SearchAndCreateNewProps {
  onSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  searchText: string;
}

export default SearchAndCreateNew;
