import React, { useState, useCallback } from "react";
import "./loginForm.scss";
import { Input, Button, Form } from "..";
import * as _services from "../../services/UserInfoService";
import { useHistory } from "react-router-dom";

export const LoginForm = React.memo(() => {
  console.log("On LoginForm Init");
  const initialState = '';
  const [username, setUsername] = useState(initialState); 
  const [password, setPassword] = useState(initialState); 
  const [isError, setIsError] = useState(false); 
  const history = useHistory();

  const submitForm = (event) => {
    event.preventDefault();
    _services.loginInUser({username,password}).then(res => {
      setUsername(initialState);
      setPassword(initialState);
      if(res && res.data && Object.keys(res.data).length > 0) { 
        setIsError(false);
        history.push({
          pathname:"/home",
          data: res.data
        });
      } else {
        setIsError(true);
      }
    });
  };

  const updateUsername = useCallback((event)=>{
    setUsername(event.target.value)
  },[username])

  const updatePassword =  useCallback((event)=>{
    setPassword(event.target.value)
  },[password])

  return (
    <>
      <h2 className="login_title">Login Form</h2>
      <Form selector="login_form" name="login_form" onFormSubmit={submitForm}>
        <Input
          value={username}
          onChange={updateUsername}
          type="text"
          placeholder="UserName"
          autofocus={true} />
        <Input
          value={password}
          onChange={updatePassword}
          type="password"
          placeholder="Password" />
        <Button selector="full" type="submit"> Login </Button>
      </Form>
      <p className={isError?"error text-center":"hide"} >Please enter valid credentials</p>
    </>
  );
})
