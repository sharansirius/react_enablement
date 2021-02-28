import React, { ChangeEvent } from "react";
import { Input } from "../";

function Search({ searchText, onChange }: SearchProp) {
  console.log("Search init");
  return (
    <Input
      type="search"
      value={searchText}
      name="search"
      placeholder="Search Blogs"
      autofocus={true}
      onChange={onChange}
      classSelector="long"
    />
  );
}

interface SearchProp {
  searchText: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default Search;
