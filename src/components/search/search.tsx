import styles from "./search.module.scss";
import React, { ChangeEvent } from 'react';
import {Input, Button} from '../'

function Search({searchText,onChange}:SearchProp) {
  console.log("Search init");
  return (
    <div className={styles.search}>
        <Input  type="search" 
                value={searchText} 
                name="search"
                placeholder="Search Blogs"
                autofocus={true}
                onChange={onChange}/>
        <Button onClick={()=>console.log("Hi Im clicked")} classSelector="primary">New</Button>      
    </div>
  );
}

interface SearchProp {
  searchText: string,
  onChange?:(event: ChangeEvent<HTMLInputElement>) => void
}

export default Search;
