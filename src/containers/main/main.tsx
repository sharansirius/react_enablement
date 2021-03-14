import React from "react";
import { Details, LeftNav, Blogs } from "../";
import { useSelector } from "react-redux";

function Main() {
  const theme = useSelector((state: BlogAppStore) => state.theme);
  return (
    <div className={`app ${theme}`}>
      <LeftNav />
      <Blogs />
      <Details />
    </div>
  );
}

export default Main;
