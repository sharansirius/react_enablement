import React from "react";
import styles from "./Login.module.scss";

function Login() {
  console.log("Login init");
  return <div>Login</div>;
}

interface LoginProps {
  Login: string;
}

export default React.memo(Login);
