import React, { useState } from "react";
import "./loginForm.scss";
import { Input, Button } from "..";
import * as _services from "../../services/UserInfoService";
import { useHistory } from "react-router-dom";

function LoginForm() {
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

  return (
    <>
      <h2 className="login_title">Login Form</h2>
      <form className="login_form" name="login_form" onSubmit={submitForm}>
        <Input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          type="text"
          placeholder="UserName"
          autofocus={true} />
        <Input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Password" />
        <Button selector="full" type="submit"> Login </Button>
      </form>{isError}
      <p className={isError?"error text-center":"hide"} >Please enter valid credentials</p>
    </>
  );
}

export default LoginForm;
