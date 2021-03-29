import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Heading, Input, Button, JumboImage } from "../../components";
import { logIn } from "../../redux";
import styles from "./login.module.scss";

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const submitForm = () => {
    dispatch(logIn());
    history.push("/");
  };

  return (
    <>
      <JumboImage src="images/sindel-background.png" />
      <div className={styles.loginForm}>
        <Heading label="Login" classSelector="medium" />
        <p>
          Logging into CineFLEX will give you access to full videos and movies.
          You can sit back, relax and watch at home
        </p>
        <Input
          type="text"
          value="sharan"
          name="username"
          placeholder="username"
          classSelector="long"
        />
        <Input
          type="password"
          value="password"
          name="password"
          placeholder="password"
          classSelector="long"
        />
        <Button
          label="Login"
          onClick={submitForm}
          classSelector="primary_full"
        />
      </div>
    </>
  );
}

// interface LoginProps {
//   Login: string;
// }

export default React.memo(Login);
