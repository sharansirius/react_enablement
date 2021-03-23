import React from "react";
import styles from "./logo.module.scss";
import { APPLICATION_LOGO } from "../../constants/appConstants";

function Logo({ length }: LogoProps) {
  return <img className={styles[length]} src={APPLICATION_LOGO} alt="Logo" />;
}

interface LogoProps {
  length: string;
}

export default Logo;
