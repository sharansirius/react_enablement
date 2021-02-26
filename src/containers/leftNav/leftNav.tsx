import React from "react";
import styles from "./leftNav.module.scss";
import { Card, Logo, Filters, ButtonGroup } from "../../components";

function LeftNav() {
  console.log("LeftNav Init");
  return (
    <Card width="20">
      <div className={styles.leftNav}>
        <Logo />
        <Filters />
        <ButtonGroup />
      </div>
    </Card>
  );
}

export default LeftNav;
