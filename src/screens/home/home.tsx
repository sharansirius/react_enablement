import React from "react";
import styles from "./Home.module.scss";

function Home() {
  console.log("Home init");
  return <div>Home</div>;
}

interface HomeProps {
  home: string;
}

export default React.memo(Home);
