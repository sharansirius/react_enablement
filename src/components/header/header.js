import React, {useContext} from "react";
import { Timer } from "../../components";
import UserContext from "../../context/userContext";
import "./header.scss";
export const Header = React.memo(() => {
    const user_info = useContext(UserContext);
  // const user_info = { name: "Sharan", prime: "true" };
  console.log("On Header init");
  return (
    <div className="header">
      <ul>
        <li className="logo">
          <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo" />
        </li>
        <li className={user_info?.prime === "false" ? "hide" : "prime"}>
          <img src={process.env.PUBLIC_URL + "/img/prime.png"} alt="prime" />
        </li>
      </ul>
      <ul className="timer">
        <li>
          <Timer init={new Date()} />
        </li>
        <li>Hi, {user_info?.name}</li>
      </ul>
    </div>
  );
});


