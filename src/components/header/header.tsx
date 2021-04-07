import React from "react";
import styles from "./header.module.scss";
import { Logo, Menu, User } from "..";

function Header() {
  return (
    <div className={styles.header}>
      <Logo length="normal" />
      <Menu />
      <User />
    </div>
  );
}

// interface HeaderProps {
//   Header: string;
// }

export default Header;
