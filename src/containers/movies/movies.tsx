import React from "react";
import styles from "./Login.module.scss";

function Login() {
  console.log("Login init");
  return <div>Sharan</div>;
}

interface LoginProps {
  Login: string;
}

export default React.memo(Login);
