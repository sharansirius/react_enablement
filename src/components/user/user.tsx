import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./user.module.scss";
import { logIn, logOut } from "../../redux";
import { Button } from "..";

function User() {
  const userAuth = useSelector((state: CineStore) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const submitForm = () => {
    dispatch(logIn());
    history.push("/");
  };
  return (
    <>
      {userAuth?.isLoggedIn ? (
        <div>
          <span className={styles.user}>Hi, Sharan | </span>
          <Button
            onClick={() => dispatch(logOut())}
            classSelector="plain_capitalize"
            label="Logout"
          />
        </div>
      ) : (
        <Button
          onClick={submitForm}
          classSelector="plain_uppercase"
          label="Login"
        />
      )}
    </>
  );
}

export default User;
